(function (root, constructor) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = constructor;
    } else {
        root.StickyBlock = constructor;
    }
}(this, (function () {
    function StickyBlock(element, options) {
        var self = this;

        this.topPaddingForSticking = options.topPaddingForSticking || 0;
        this.bottomPaddingForSticking = options.bottomPaddingForSticking || 0;
        this.leftPaddingForSticking = options.leftPaddingForSticking || 0;
        this.topBottomContainerPaddings = options.topBottomContainerPaddings || 0;

        this.$block = $(element);
        this.fixedWidth = options.width;
        this.blockHeight = options.blockHeight;
        this.callbacks = options.callbacks || {};

        this.$bottomStickBoundElement = options.bottomStickBoundElement ? $(options.bottomStickBoundElement) : null;
        this.$bottomStickBoundContainer = options.bottomStickBoundContainer ? $(options.bottomStickBoundContainer) : null;
        this.$upperStickBoundElement = options.upperStickBoundElement ? $(options.upperStickBoundElement) : null;
        this.$upperStickBoundContainer = options.upperStickBoundContainer ? $(options.upperStickBoundContainer) : null;

        this.$leftStickBoundElement = options.leftStickBoundElement ? $(options.leftStickBoundElement) : null;
        this.$leftStickBoundContainer = options.leftStickBoundContainer ? $(options.leftStickBoundContainer) : null;

        this.layoutConfig = {
            topSticked: {},
            bottomSticked: {}
        };

        if (options.layoutConfig) {
            this.layoutConfig.topSticked = options.layoutConfig.topSticked || {};
            this.layoutConfig.bottomSticked = options.layoutConfig.bottomSticked || {};
        }

        this.$block.width(this.fixedWidth || this.$block.parent().outerWidth());

        this.isTopSticked = ko.observable(false);
        this.isBottomSticked = ko.observable(false);
        this.topOffset = ko.observable(0);

        $(window).on('scroll', function () {
            if (!self._isEnoughSpace()) {
                self.isTopSticked(false);
                self.isBottomSticked(false);
                return;
            }

            self._fixPosition();
            self.callbacks.onScroll && self.callbacks.onScroll();
        });

        $(window).on('resize', function () {
            self.isTopSticked(self._isTopSticked());
            self.isBottomSticked(self._isBottomSticked());
            self.topOffset(self._getTopPosition());

            self.initialOffsetTop = self._getUpperBound();

            if (self.$leftStickBoundElement || self.$leftStickBoundContainer) {
                self.layoutConfig.topSticked.left = self._getLeftBoundOffset();
                self.layoutConfig.bottomSticked.left = self._getLeftBoundPosition();
                self._fixPosition();
            }

            self.$block.width(self.fixedWidth || self.$block.parent().outerWidth());
            self.callbacks.onResize && self.callbacks.onResize();
        });

        if (this._isEnoughSpace()) {
            this._fixPosition();

            this.isTopSticked(this._isTopSticked());
            this.isBottomSticked(this._isBottomSticked());
            this.topOffset(this._getTopPosition());
        } else {
            self.isTopSticked(false);
            self.isBottomSticked(false);
        }

        setInterval(function () {
            self._fixPosition();
        }, 200);
    }

    StickyBlock.prototype.updateOptions = function (options) {
        $.extend(this.options, options);
    };

    StickyBlock.prototype._getTopPosition = function () {
        var topOffset = 0,
            isBottomSticked = this._isBottomSticked(),
            isTopSticked = this._isTopSticked(isBottomSticked),
            bottomBound = this._getBottomBoundPosition();

        isTopSticked && (topOffset = (this.layoutConfig.topSticked.top || this.topPaddingForSticking) + 'px' );
        isBottomSticked && (topOffset = (bottomBound - this.$block.outerHeight() - this.bottomPaddingForSticking) + 'px');

        if (isBottomSticked && !this.$bottomStickBoundElement && this.$bottomStickBoundContainer) {
            return 'initial';
        }

        return topOffset;
    };

    StickyBlock.prototype._isTopSticked = function (isBottomSticked) {
        return window.pageYOffset > this._getUpperBound() && !isBottomSticked;
    };

    StickyBlock.prototype._isBottomSticked = function () {
        var bottomBoundOffset = this._getBottomBoundOffset(),
            blockHeight = this.blockHeight || this.$block.outerHeight();

        return window.pageYOffset + blockHeight > bottomBoundOffset - this.bottomPaddingForSticking;
    };

    StickyBlock.prototype._fixPosition = function () {
        var contentHeight,
            isTopSticked = this._isTopSticked(),
            stickType,
            left;

        if (!this._isEnoughSpace()) {
            this.isTopSticked(false);
            this.isBottomSticked(false);
            return;
        }

        this.isTopSticked(isTopSticked);
        this.isBottomSticked(this._isBottomSticked());
        this.topOffset(this._getTopPosition());

        contentHeight = this.$block.children().length && this.$block.children().first().outerHeight();

        contentHeight && this.$block.height(contentHeight);

        stickType = this._getStickType();
        stickType === 'topSticked'
            ? this.$block.css('margin-left', -window.pageXOffset + 'px')
            : this.$block.css('margin-left', '');

        left = (this.layoutConfig && this.layoutConfig[stickType] && this.layoutConfig[stickType].left)
            ? this.layoutConfig[stickType].left
            : 0;

        if (this.$leftStickBoundElement || this.$leftStickBoundContainer) {
            this.$block.css({
                left: left
            })
        }
    };

    StickyBlock.prototype._getUpperBound = function () {
        var topOffsetCorrection = this.layoutConfig.topSticked.top || 0;

        return this.$upperStickBoundElement
            ? this.$upperStickBoundElement.offset().top + this.$upperStickBoundElement.outerHeight() + this.topPaddingForSticking - topOffsetCorrection
            : this.$upperStickBoundContainer.offset().top + this.topPaddingForSticking - topOffsetCorrection;
    };

    StickyBlock.prototype._getBottomBoundOffset = function () {
        return this.$bottomStickBoundElement
            ? this.$bottomStickBoundElement.offset().top
            : this.$bottomStickBoundContainer.offset().top + this.$bottomStickBoundContainer.height();
    };

    StickyBlock.prototype._getBottomBoundPosition = function () {
        return this.$bottomStickBoundElement
            ? this.$bottomStickBoundElement.position().top
            : this.$bottomStickBoundContainer.position().top + this.$bottomStickBoundContainer.height();
    };

    StickyBlock.prototype._getLeftBoundOffset = function () {
        return this.$leftStickBoundElement
            ? this.$leftStickBoundElement.offset().left + this.$leftStickBoundElement.outerWidth() + this.leftPaddingForSticking
            : this.$leftStickBoundContainer.offset().left;
    };

    StickyBlock.prototype._getLeftBoundPosition = function () {
        return this.$leftStickBoundElement
            ? this.$leftStickBoundElement.position().left + this.$leftStickBoundElement.outerWidth() + this.leftPaddingForSticking
            : this.$leftStickBoundContainer.position().left;
    };

    StickyBlock.prototype._getStickType = function () {
        return this.isTopSticked()
            ? 'topSticked'
            : this.isBottomSticked()
            ? 'bottomSticked'
            : 'notSticked;'
    };

    StickyBlock.prototype._isEnoughSpace = function () {
        var blockHeight = this.blockHeight || this.$block.children().first().outerHeight();
        return (this._getBottomBoundOffset() - this._getUpperBound()) > blockHeight + this.topBottomContainerPaddings;
    };

    return StickyBlock;
}())));
