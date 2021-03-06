## 自定义主题

bee-ui提供了一套默认的主题颜色。

如需要自定义主题可以在项目的根目录下添加 theme.less


``` less
@primary-color: #ff6701;
@primary-tint-color: #ff8533;
@primary-font-color: #ffffff;

@success-color: #00b450;
@success-tint-color: #45b577;
@success-font-color: #ffffff;

@error-color: #ba3c2d;
@error-tint-color: #d45344;
@error-font-color: #ffffff;

@font-color: #333333;
@font-tint-color: #888888;

@border-color: #cccccc;
@border-radius: 4px;

@placeholder-color: #cccccc;
@mask-background-color: rgba(0, 0, 0, .2);

@normal-height: 30px;
@font-size: 14px;

@z-0: 1;
@z-1: 9;
@z-2: 99;

// alert
@alert-title-height:  40px;
@alert-footer-button-height: 30px;


// button
@button-sm-width: 50px;
@button-width: 80px;
@button-lg-width: 140px;
@button-sm-height: 24px;
@button-height: @normal-height;
@button-lg-height: 38px;
@button-background-color_disabled: #cccccc;
@button-color: @font-color;
@button-background-color: transparent;
@button-border-color_active: @primary-color;
@button-color_active: @primary-color;
@button-animation-background-color: rgba(220, 220, 220, 0.3);
@button-primary-color: @primary-font-color;
@button-primary-background-color: @primary-color;
@button-primary-background-color_hover: @primary-tint-color;
@button-primary-background-color_active: @primary-color;
@button-primary-animation-background-color: rgba(255, 255, 255, .3);
@button-success-color: @success-font-color;
@button-success-background-color: @success-color;
@button-success-background-color_hover: @success-tint-color;
@button-success-background-color_active: @success-color;
@button-success-animation-background-color: rgba(255, 255, 255, .3);
@button-error-color: @error-font-color;
@button-error-background-color: @error-color;
@button-error-background-color_hover: @error-tint-color;
@button-error-background-color_active: @error-color;
@button-error-animation-background-color: rgba(255, 255, 255, .3);


// checkbox
@checkbox-line-height: @normal-height;
@checkbox-color-unselected: @border-color;
@checkbox-color-selected: @primary-color;

// dialog 
@dialog-font-size: 14px;
@dialog-mask-background-color: @mask-background-color;
@dialog-panel-background-color: #ffffff;
@dialog-panel-border-color: #f5f5f5;
@dialog-title-font-size: 16px;
@dialog-title-height:  50px;
@dialog-title-background-color: #f5f5f5;
@dialog-title-color: @font-color;
@dialog-close-color: @font-tint-color;
@dialog-body-color: @font-color;
@dialog-body-height: 128px;
@dialog-footer-button-height: 36px;

// empty
@empty-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFnElEQVR4Xu2bf4hUVRTHz5nZmZ2W0opKk3F33j13kMA0wpDQworoh0iItZREYKVR/RFlBJX9VVqBUUREP7SEMIrALPIPiSKyjUC0sl9/zDt3zN022rByo7bF3XfiDm9szF33vTvuzM7s3D93znn3+/3cc2fuj7cI07zhNPcPLQCtCqgjAd/3n0DEexDxLqXUO/WQUtcpwMw/A8BsEflSa33xtAPg+/6viHiOiHyntZ7fAlAHAs5TwBjT5XleLyIGrrpPVQUUi8UbROSgUurruFqcAPi+vw4RXxKR/ZlM5ppsNns4bsc2vloAIoLM/DIirhWRkUwm42Wz2b44WlwBvIqId4YdFVKp1LLOzs7+OB1XCyA0vw0Rbwv7HW1vb8/VBEB/f3/H0NDQbgBYajsXETsVlhLRoTgQXCtgLPMicpPW+t04/dtYpwqwiWNA6EfEZURUiCqCmT8FgMtEZIvWem2UPGveGPMmANwcwh8BgG4X81UBGAfC4XQ6vbizs5OjmOnt7T17ZGRkQS6X60HEo1FymHkLANwRmj+KiCuJaFeU3LFinCug/LCwEj4GgMUlooiPKqU2uQo6WZ6ItBljSqBE5GgikViulPqwmr6qBmA7HxgYOH1wcHArIl6QSqVWRq0AF+HMvElEuhOJxN3Vmq96CrgYmGo5p6QCppqpOHpaAOLQasbYVgVEHVVmvtAuWgDgvKg59YhDxD8RcZ/neZ9E6X/CChCRNDPvRMTrojxwCsXsUEp1I+LoyTRNCICZtwPA6ilkLI6U54jofmcAxpgVIvJ++AABgNdEZFcymfw9jopaxorIoiAInkTEtrDfVUS0YzwN41ZAsVicHQTB9wBwVpj8ABE9W0szrn0x8xo7WGH+LwAwj4iOjPW8cQEwsz2lvTFcd+/TWi9yFVSPPGb+DACWhPrH3W2OCcD3/SsQ0W5wSk1Elmqte+phxLVPZrYDtrdsoa2tbX5XV5et6OPaCQBEJGWM+caWTWh+t9b6Wlch9cxjZvv9tSL08bnWulQRle0EAMaY9SKyuSJoARFZIA3XjDHzRMSOeiKEsEZrvW1cAIVC4VxEZEQ8Iwx6i4huaTjnFYKZ+Q0AuDUEcDiZTGrP8/4ohxxXAcy8FQBuDz8cTSaT+VwuV2xkAH19fdnh4eGDAJAMfbxORGWP/50JFovFi4Ig2F9xTvgiEd3byObL2pn5BQA45iWRSFzqed4X9vNjFcDMe8qnvADwDyLmlFL2N7ThmzFmlr04AYDM/7/YSwCYeTkAfFB2KiIbtdYbGt55hQHf9zci4iPH5j7i5UqpPWUABwDA7vZs+y0IAi+fzw82EwBmnikihxBxRujrABEtRN/3r0TEjyrIPKiUeqaZzJe9+L7/ECI+XVkFFsDbiNgdzo2fiMiLekbfaJCKxWImCAL7XTAr1L7dXi7and2Zk2FGROzhxPVEZNflsRsz2zWI/Wk+LXZytIS/LAC7zZ3M1kNEpTvEuM33fbsoU3Hz4sTXAsCPRJSLI6piztqrr/K+3uURE+bUAoAg4vlx1xTGmIUi8tWEDqoMqAUAK/FhInoqjlbf9zcj4vo4OS6xtQIwkE6nc3Pnzh2KIjL8zbbvHJQ3ZVHSnGJqBcAequwkolUTvVMUnkfY6+6rnRzFTKoZAKtLRN7r6OhYPWfOnL/H0lkoFGYkEgl7gHlVTB/O4TUFEEKwb5I8LyL2uOpb+zdEtMvwSwDgPvvipLMbh8SaA3DQOKkpLQA1WAlO6ghW+/BWBbQqYPI3Q9VW6aTmt6YAM9v789LFwTRso7YC7Lm/03a10YGJyA/2SGwDIj7e6GZc9IvIYxhuPuzNr12KTqe2Vym1pHQsXigU2m0VIOI6AJjZ5BSOiMgrdvTz+fzwhO8INTkM9/8XaBYwrQpolpF09THtK+BfrQR+1YR4WrkAAAAASUVORK5CYII=');
@empty-color_placeholder: @placeholder-color;


// input
@input-height: @normal-height;
@padding-vertial: 10px;
@input-background-color: #ffffff;
@input-border-color: @border-color;
@input-border-color_primary: @primary-color;
@input-border-color_success: @success-color;
@input-border-color_error: @error-color;
@input-color: @font-color;
@input-color_primary: @primary-color;
@input-color_success: @success-color;
@input-color_error: @error-color;
@input-adorn-color: @font-tint-color;
@input-adorn-color_primary: @primary-color;
@input-adorn-color_success: @success-color;
@input-adorn-color_error: @error-color;
@input-placeholder-color: @placeholder-color;
@input-placeholder-color_primary: @primary-tint-color;
@input-placeholder-color_success: @success-tint-color;
@input-placeholder-color_error: @error-tint-color;

// loading
@loading-background-color: rgba(255, 255, 255, .8);

// message
@message-width: 320px;
@message-top: 80px;
@message-color_warn: @primary-tint-color;
@message-background-color_warn: #ffdbc1;
@message-color_success: @success-color;
@message-background-color_success: #d5f7c3;
@message-color_error: @error-color;
@message-background-color_error: #ffb2b2;

// notification
@notification-width: 320px;
@notification-border-color: @border-color;
@notification-body-background-color: #ffffff;
@notification-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
@notification-title-color: @font-color;
@notification-body-color: @font-tint-color;
@notification-color_success: @success-color;
@notification-color_warn: @primary-color;
@notification-color_error: @error-color;

// pagination
@pagination-height: 28px;
@pagination-background-color_disabled: #eeeeee;

// picker
@picker-date-width: 320px;
@picker-date-height: 350px;
@picker-date-line-height: 24px;
@picker-date-day-size: 36px;
@picker-font-size: @font-size;
@picker-date-header-font-size: 16px;
@picker-quick-button-font-size_inner: 13px;
@picker-time-font-size: 13px;
@picker-quick-button-width: 100px;
@picker-border-color: @border-color;
@picker-background-color: #ffffff;
@picker-color_disabled: @border-color;
@picker-color_primary: @primary-color;
@picker-color_today: @primary-color;
@picker-color_selected: #ffffff;
@picker-background-color_selected:  @primary-color;
@picker-background-color_range: rgba(255, 133, 51, .2);
@picker-background-color_disabled: #f5f5f5;

// popper
@popper-border-color: #dedede;
@popper-shadow-color: rgba(0, 0, 0, .2);
@popper-background-color: #ffffff;
@popper-arr-size: 6px;
@popper-zindex: @z-2 - 10;

// radio
@radio-line-height: @normal-height;
@radio-color-unselected: @border-color;
@radio-color-selected: @primary-color;

// scrollbar
@scrollbar-size: 8px;
@scrollbar-background-color: rgba(0, 0, 0, .3);
@scrollbar-background-color_active: rgba(54, 44, 44, 0.6);

// select
@select-border-color: @border-color;
@select-height: @normal-height;
@select-min-width: 120px;
@select-icon-width: 20px;
@select-background-color: #ffffff;
@select-background-color_disabled: #f5f5f5;
@select-options-background-color: #ffffff;
@select-options-background-color_hover: #e5e5e5;
@select-item-background-color_multiple: #f1f1f1;

// step
@step-item-size: 28px;
@step-line-height: 4px;
@step-label-font-size: 16px;
@step-desc-font-size: 12px;
@step-color: #ffffff;
@step-background-color: @border-color;
@step-color_actived: #ffffff;
@step-background-color_actived: @primary-color;

// switch
@switch-button-margin: 4px;
@switch-size: @normal-height;
@switch-width: @switch-size * 2 - @switch-button-margin;
@switch-size_sm: 24px;
@switch-width_sm: @switch-size_sm * 2 - @switch-button-margin;
@switch-size_lg: 36px;
@switch-width_lg: @switch-size_lg * 2 - @switch-button-margin;
@switch-background-color_active: @primary-color;
@switch-background-color: @border-color;
@switch-button-background-color: #ffffff;
@switch-button-shadow-color: rgba(0, 0, 0, .4);

// tab
@tab-background-color: #f5f5f5;
@tab-color_active: @primary-color;
@tab-background-color_active: #ffffff;

// table
@table-primary-color: @primary-color;
@table-border-color: @border-color;
@table-head-color: #333333;
@table-head-background-color: #f5f5f5;
@table-body-color: #888888;
@table-body-background-color: #ffffff;
@table-tr-color_actived: @primary-color;
@table-tr-background-color_actived: rgba(255, 103, 1, .05);

// tooptip
@tooptip-background-color: #333333;
@tooptip-color: #ffffff;
@tooptip-font-size: 12px;

// drawer
@drawer-background-color: #ffffff;
@drawer-mask-color: @mask-background-color;
@drawer-zindex: @z-1;

// alias
@alias-option-background-color: #f5f5f5;

// tree
@tree-blank-width: 24px;
@tree-fold-line-color: @border-color;
@tree-primary-color: @primary-color;
@tree-icon-default-color: @font-tint-color;
@tree-disabled-color: #cccccc;

```