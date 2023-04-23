if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var _api_root = "https://yy.ibeacontime.com/web/index.php?store_id=11&r=api/", api = {
    index: _api_root + "default/index",
    default: {
      store: _api_root + "default/store",
      index: _api_root + "default/index",
      goods_list: _api_root + "default/goods-list",
      cat_list: _api_root + "default/cat-list",
      goods: _api_root + "default/goods",
      district: _api_root + "default/district",
      goods_attr_info: _api_root + "default/goods-attr-info",
      upload_image: _api_root + "default/upload-image",
      comment_list: _api_root + "default/comment-list",
      article_list: _api_root + "default/article-list",
      article_detail: _api_root + "default/article-detail",
      video_list: _api_root + "default/video-list",
      goods_qrcode: _api_root + "default/goods-qrcode",
      coupon_list: _api_root + "default/coupon-list",
      topic_list: _api_root + "default/topic-list",
      topic: _api_root + "default/topic",
      navbar: _api_root + "default/navbar",
      navigation_bar_color: _api_root + "default/navigation-bar-color",
      shop_list: _api_root + "default/shop-list",
      shop_detail: _api_root + "default/shop-detail",
      topic_type: _api_root + "default/topic-type",
      buy_data: _api_root + "default/buy-data",
      goods_recommend: _api_root + "default/goods-recommend",
      search: _api_root + "default/search",
      get_access_token: "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=K2aGjPoMhm9GAxmyWOH8s1Gj&client_secret=RPGebAyF1Wqveqcd6TaZSHhzqSAf8vBO",
      distinguish_image: "https://aip.baidubce.com/rest/2.0/image-classify/v1/plant?access_token="
    },
    cart: {
      list: _api_root + "cart/list",
      add_cart: _api_root + "cart/add-cart",
      delete: _api_root + "cart/delete",
      cart_edit: _api_root + "cart/cart-edit"
    },
    passport: {
      login: _api_root + "passport/login",
      on_login: _api_root + "passport/on-login"
    },
    order: {
      submit_preview: _api_root + "order/submit-preview",
      submit: _api_root + "order/submit",
      pay_data: _api_root + "order/pay-data",
      list: _api_root + "order/list",
      revoke: _api_root + "order/revoke",
      confirm: _api_root + "order/confirm",
      count_data: _api_root + "order/count-data",
      detail: _api_root + "order/detail",
      refund_preview: _api_root + "order/refund-preview",
      refund: _api_root + "order/refund",
      refund_detail: _api_root + "order/refund-detail",
      comment_preview: _api_root + "order/comment-preview",
      comment: _api_root + "order/comment",
      express_detail: _api_root + "order/express-detail",
      clerk: _api_root + "order/clerk",
      clerk_detail: _api_root + "order/clerk-detail",
      get_qrcode: _api_root + "order/get-qrcode",
      location: _api_root + "order/location",
      refund_send: _api_root + "order/refund-send"
    },
    user: {
      address_list: _api_root + "user/address-list",
      address_detail: _api_root + "user/address-detail",
      address_save: _api_root + "user/address-save",
      address_set_default: _api_root + "user/address-set-default",
      address_delete: _api_root + "user/address-delete",
      save_form_id: _api_root + "user/save-form-id",
      favorite_add: _api_root + "user/favorite-add",
      favorite_remove: _api_root + "user/favorite-remove",
      favorite_list: _api_root + "user/favorite-list",
      index: _api_root + "user/index",
      wechat_district: _api_root + "user/wechat-district",
      add_wechat_address: _api_root + "user/add-wechat-address",
      topic_favorite: _api_root + "user/topic-favorite",
      topic_favorite_list: _api_root + "user/topic-favorite-list",
      member: _api_root + "user/member",
      card: _api_root + "user/card",
      card_qrcode: _api_root + "user/card-qrcode",
      card_clerk: _api_root + "user/card-clerk",
      web_login: _api_root + "user/web-login",
      submit_member: _api_root + "user/submit-member",
      user_binding: _api_root + "user/user-binding",
      user_hand_binding: _api_root + "user/user-hand-binding",
      user_empower: _api_root + "user/user-empower",
      sms_setting: _api_root + "user/sms-setting"
    },
    share: {
      join: _api_root + "share/join",
      check: _api_root + "share/check",
      get_info: _api_root + "share/get-info",
      get_price: _api_root + "share/get-price",
      apply: _api_root + "share/apply",
      cash_detail: _api_root + "share/cash-detail",
      get_qrcode: _api_root + "share/get-qrcode",
      shop_share: _api_root + "share/shop-share",
      bind_parent: _api_root + "share/bind-parent",
      get_team: _api_root + "share/get-team",
      get_order: _api_root + "share/get-order",
      index: _api_root + "share/index"
    },
    coupon: {
      index: _api_root + "coupon/index",
      share_send: _api_root + "coupon/share-send",
      receive: _api_root + "coupon/receive"
    },
    miaosha: {
      list: _api_root + "miaosha/list",
      goods_list: _api_root + "miaosha/goods-list",
      details: _api_root + "miaosha/details",
      submit_preview: _api_root + "miaosha/submit-preview",
      submit: _api_root + "miaosha/submit",
      pay_data: _api_root + "miaosha/pay-data",
      order_list: _api_root + "miaosha/order-list",
      order_details: _api_root + "miaosha/order-details",
      order_revoke: _api_root + "miaosha/revoke",
      express_detail: _api_root + "miaosha/express-detail",
      confirm: _api_root + "miaosha/confirm",
      comment_preview: _api_root + "miaosha/comment-preview",
      comment: _api_root + "miaosha/comment",
      refund_preview: _api_root + "miaosha/refund-preview",
      refund: _api_root + "miaosha/refund",
      refund_detail: _api_root + "miaosha/refund-detail",
      comment_list: _api_root + "miaosha/comment-list",
      goods_qrcode: _api_root + "miaosha/goods-qrcode"
    },
    group: {
      index: _api_root + "group/index/index",
      list: _api_root + "group/index/good-list",
      details: _api_root + "group/index/good-details",
      goods_attr_info: _api_root + "group/index/goods-attr-info",
      submit_preview: _api_root + "group/order/submit-preview",
      submit: _api_root + "group/order/submit",
      pay_data: _api_root + "group/order/pay-data",
      order: {
        list: _api_root + "group/order/list",
        detail: _api_root + "group/order/detail",
        express_detail: _api_root + "group/order/express-detail",
        comment_preview: _api_root + "group/order/comment-preview",
        comment: _api_root + "group/order/comment",
        confirm: _api_root + "group/order/confirm",
        goods_qrcode: _api_root + "group/order/goods-qrcode",
        get_qrcode: _api_root + "group/order/get-qrcode",
        clerk: _api_root + "group/order/clerk",
        clerk_order_details: _api_root + "group/order/clerk-order-details",
        revoke: _api_root + "group/order/revoke",
        refund_preview: _api_root + "group/order/refund-preview",
        refund: _api_root + "group/order/refund",
        refund_detail: _api_root + "group/order/refund-detail"
      },
      group_info: _api_root + "group/order/group",
      comment: _api_root + "group/index/goods-comment",
      goods_qrcode: _api_root + "group/index/goods-qrcode",
      search: _api_root + "group/index/search"
    },
    book: {
      index: _api_root + "book/index/index",
      list: _api_root + "book/index/good-list",
      details: _api_root + "book/index/good-details",
      submit_preview: _api_root + "book/order/submit-preview",
      submit: _api_root + "book/order/submit",
      order_list: _api_root + "book/order/list",
      order_cancel: _api_root + "book/order/cancel",
      order_pay: _api_root + "book/order/pay-data",
      order_details: _api_root + "book/order/order-details",
      shop_list: _api_root + "book/index/shop-list",
      get_qrcode: _api_root + "book/order/get-qrcode",
      clerk: _api_root + "book/order/clerk",
      apply_refund: _api_root + "book/order/apply-refund",
      comment_preview: _api_root + "book/order/comment-preview",
      submit_comment: _api_root + "book/order/comment",
      goods_comment: _api_root + "book/index/goods-comment",
      goods_qrcode: _api_root + "book/index/goods-qrcode",
      clerk_order_details: _api_root + "book/order/clerk-order-details"
    },
    quick: {
      quick: _api_root + "quick/quick/quick",
      quick_goods: _api_root + "quick/quick/quick-goods",
      quick_car: _api_root + "quick/quick/quick-car"
    },
    fxhb: {
      open: _api_root + "fxhb/index/open",
      open_submit: _api_root + "fxhb/index/open-submit",
      detail: _api_root + "fxhb/index/detail",
      detail_submit: _api_root + "fxhb/index/detail-submit"
    },
    recharge: {
      index: _api_root + "recharge/index",
      list: _api_root + "recharge/list",
      submit: _api_root + "recharge/submit",
      record: _api_root + "recharge/record",
      detail: _api_root + "recharge/detail"
    },
    mch: {
      apply: _api_root + "mch/index/apply",
      apply_submit: _api_root + "mch/index/apply-submit",
      shop: _api_root + "mch/index/shop",
      shop_list: _api_root + "mch/index/shop-list",
      shop_cat: _api_root + "mch/index/shop-cat",
      user: {
        myshop: _api_root + "mch/user/myshop",
        setting: _api_root + "mch/user/setting",
        setting_submit: _api_root + "mch/user/setting-submit",
        shop_qrcode: _api_root + "mch/user/shop-qrcode",
        account: _api_root + "mch/user/account",
        cash: _api_root + "mch/user/cash",
        account_log: _api_root + "mch/user/account-log",
        cash_log: _api_root + "mch/user/cash-log",
        tongji_year_list: _api_root + "mch/user/tongji-year-list",
        tongji_month_data: _api_root + "mch/user/tongji-month-data",
        cash_preview: _api_root + "mch/user/cash-preview"
      },
      goods: {
        list: _api_root + "mch/goods/list",
        set_status: _api_root + "mch/goods/set-status",
        delete: _api_root + "mch/goods/delete"
      },
      order: {
        list: _api_root + "mch/order/list",
        detail: _api_root + "mch/order/detail",
        send: _api_root + "mch/order/send",
        refund: _api_root + "mch/order/refund",
        edit_price: _api_root + "mch/order/edit-price",
        refund_detail: _api_root + "mch/order/refund-detail"
      }
    },
    integral: {
      index: _api_root + "integralmall/integralmall/index",
      coupon_info: _api_root + "integralmall/integralmall/coupon-info",
      exchange_coupon: _api_root + "integralmall/integralmall/exchange-coupon",
      integral_pay: _api_root + "integralmall/integralmall/integral-pay",
      goods_info: _api_root + "integralmall/integralmall/goods-info",
      submit_preview: _api_root + "integralmall/integralmall/submit-preview",
      submit: _api_root + "integralmall/integralmall/submit",
      list: _api_root + "integralmall/integralmall/list",
      revoke: _api_root + "integralmall/integralmall/revoke",
      order_submit: _api_root + "integralmall/integralmall/order-submit",
      confirm: _api_root + "integralmall/integralmall/confirm",
      get_qrcode: _api_root + "integralmall/integralmall/get-qrcode",
      clerk_order_details: _api_root + "integralmall/integralmall/clerk-order-details",
      clerk: _api_root + "integralmall/integralmall/clerk",
      explain: _api_root + "integralmall/integralmall/explain",
      exchange: _api_root + "integralmall/integralmall/exchange",
      register: _api_root + "integralmall/integralmall/register",
      integral_detail: _api_root + "integralmall/integralmall/integral-detail"
    },
    pond: {
      index: _api_root + "pond/pond/index",
      lottery: _api_root + "pond/pond/lottery",
      prize: _api_root + "pond/pond/prize",
      send: _api_root + "pond/pond/send",
      setting: _api_root + "pond/pond/setting",
      submit: _api_root + "pond/pond/submit",
      qrcode: _api_root + "pond/pond/qrcode"
    },
    scratch: {
      index: _api_root + "scratch/scratch/index",
      receive: _api_root + "scratch/scratch/receive",
      setting: _api_root + "scratch/scratch/setting",
      prize: _api_root + "scratch/scratch/prize",
      submit: _api_root + "scratch/scratch/submit",
      log: _api_root + "scratch/scratch/log",
      qrcode: _api_root + "pond/pond/qrcode"
    }
  };
  class Request {
    constructor(options = {}) {
      this.baseUrl = options.baseUrl || "";
      this.url = options.url || "";
      this.method = "GET";
      this.data = null;
      this.header = options.header || {};
      this.beforeRequest = null;
      this.afterRequest = null;
    }
    get(url, data = {}) {
      this.method = "GET";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    post(url, data = {}) {
      this.method = "POST";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    put(url, data = {}) {
      this.method = "PUT";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    delete(url, data = {}) {
      this.method = "DELETE";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    _() {
      this.header = {};
      this.beforeRequest && typeof this.beforeRequest === "function" && this.beforeRequest(this);
      return new Promise((resolve, reject) => {
        let weixin = wx;
        if ("undefined" !== typeof uni) {
          weixin = uni;
        }
        weixin.request({
          url: this.url,
          method: this.method,
          data: this.data,
          header: this.header,
          success: (res) => {
            resolve(res);
          },
          fail: (err) => {
            reject(err);
          },
          complete: (res) => {
            this.afterRequest && typeof this.afterRequest === "function" && this.afterRequest(res);
          }
        });
      });
    }
  }
  const $http = new Request();
  const service = $http;
  $http.baseUrl = _api_root;
  $http.beforeRequest = function(options) {
    uni.showLoading({
      title: "数据加载中..."
    });
  };
  $http.afterRequest = function() {
    uni.hideLoading();
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    data() {
      return {
        title: "Hello",
        banner_list: [],
        canvasWidth: 0,
        canvasHeight: 0,
        accessToken: ""
      };
    },
    onLoad() {
      this.getBannerInfo();
      this.getAccessToken();
    },
    methods: {
      //获得百度api
      async getAccessToken() {
        var that = this;
        formatAppLog("log", "at pages/index/index.vue:49", api.default.get_access_token);
        uni.request({
          url: api.default.get_access_token,
          method: "GET",
          success: function(res) {
            that.accessToken = res.data.access_token;
            formatAppLog("log", "at pages/index/index.vue:55", that.accessToken);
          }
        });
      },
      async getBannerInfo(e) {
        const { data: res } = await service.get(api.default.index);
        if (res.code != "0") {
          return uni.showToast({
            title: "banner获取失败",
            duration: 2e3,
            icon: "none"
          });
        } else {
          this.banner_list = res.data.banner_list;
        }
      },
      takePhoto(type) {
        var that = this;
        var str = type == 0 ? "album" : "camera";
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: [str],
          //从相册选择
          success: function(res) {
            formatAppLog("log", "at pages/index/index.vue:83", res.tempFilePaths);
            that.imageCompression(res.tempFilePaths[0], that);
          }
        });
      },
      imageCompression(filePath, that) {
        uni.showLoading({
          title: "正在识别"
        }), uni.getImageInfo({
          src: filePath,
          success: function(res) {
            var ratio = 2;
            var canvasWidth = res.width;
            var canvasHeight = res.height;
            while (canvasWidth > 800 || canvasHeight > 800) {
              canvasWidth = Math.trunc(res.width / ratio);
              canvasHeight = Math.trunc(res.height / ratio);
              ratio++;
            }
            that.canvasWidth = canvasWidth;
            that.canvasHeight = canvasHeight;
            formatAppLog("log", "at pages/index/index.vue:113", "app");
            uni.compressImage({
              src: filePath,
              compressedWidth: canvasWidth,
              compressHeight: canvasHeight,
              success: (res2) => {
                formatAppLog("log", "at pages/index/index.vue:120", res2.tempFilePath);
                that.uploadImage(res2.tempFilePath, that);
              }
            });
          }
        });
      },
      //上传所选图片
      uploadImage(filtPath, that) {
        uni.uploadFile({
          url: api.default.upload_image,
          filePath: filtPath,
          name: "image",
          success: function(t) {
          },
          complete: function(t) {
            formatAppLog("log", "at pages/index/index.vue:137", t);
            t = JSON.parse(t.data);
            const distinguish_url = api.default.distinguish_image + that.accessToken;
            var dic = {
              url: t.data["url"],
              distinguish_url
            };
            formatAppLog("log", "at pages/index/index.vue:145", dic);
            that.queryDataFromBaidu(dic);
          }
        });
      },
      queryDataFromBaidu: function(t) {
        uni.request({
          url: t.distinguish_url,
          method: "post",
          data: {
            //所需要参数
            url: t.url,
            baike_num: 3
          },
          //请求头  注：在get请求中可有可无，但post需要
          header: {
            "content-type": "application/x-www-form-urlencoded"
            // 默认值
          },
          success(res) {
            uni.hideLoading();
            formatAppLog("log", "at pages/index/index.vue:167", res);
            if (res.data["result"].count == 0) {
              uni.showModal({
                title: "提示",
                content: "没有找到相关植物，请重新上传"
              });
            } else {
              const jsonData = JSON.stringify(res.data["result"]);
              uni.navigateTo({
                url: "/pages/detail/detail?image_url=" + t.url + "&list=" + jsonData
              });
            }
          }
        });
      },
      bannerAction(index) {
        var baike_url = "";
        if (index == 1) {
          baike_url = "https://baike.baidu.com/item/%E5%A2%A8%E8%A5%BF%E5%93%A5%E9%BC%A0%E5%B0%BE%E8%8D%89/5120402?fr=aladdin";
        } else {
          baike_url = "https://baike.baidu.com/item/%E6%A8%B1%E8%8A%B1/70387?fr=aladdin";
        }
        uni.navigateTo({
          url: "/pages/webview/webview?baike_url=" + baike_url
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              circular: "",
              "indicator-dots": "ture",
              autoplay: "ture",
              interval: "3000",
              duration: "1000"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.banner_list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                    vue.createElementVNode("view", {
                      class: "swiper-item uni-bg-red",
                      onClick: ($event) => $options.bannerAction(index)
                    }, [
                      vue.createElementVNode("image", {
                        style: { "width": "100%", "height": "100%", "background-color": "#eeeeee" },
                        mode: "aspectFill",
                        src: item.pic_url
                      }, null, 8, ["src"])
                    ], 8, ["onClick"])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])
          ])
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          class: "button",
          style: { "background-color": "limegreen" },
          onClick: _cache[0] || (_cache[0] = ($event) => $options.takePhoto(1))
        }, "拍照识别"),
        vue.createElementVNode("button", {
          type: "default",
          class: "button",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.takePhoto(0))
        }, "从相册上传"),
        vue.createElementVNode("canvas", {
          type: "2d",
          id: "canvas",
          "canvas-id": "canvas",
          style: { "width": "300px", "height": "800px", "position": "absolute", "left": "-1000px", "top": "-1000px" }
        })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/kaiyang/Documents/HBuilderProjects/AI-project/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              circular: "",
              "indicator-dots": "ture",
              autoplay: "ture",
              interval: "1000",
              duration: "500"
            }, [
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-item uni-bg-red" }, "A")
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-item uni-bg-green" }, "B")
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-item uni-bg-blue" }, "C")
              ])
            ])
          ])
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          class: "button"
        }, "拍照识别"),
        vue.createElementVNode("button", {
          type: "default",
          class: "button"
        }, "从相册上传")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/kaiyang/Documents/HBuilderProjects/AI-project/pages/category/category.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        list: [],
        banner_url: "",
        choose_index: 0
      };
    },
    onLoad: function(options) {
      this.list = JSON.parse(options.list);
      this.banner_url = options.image_url;
      formatAppLog("log", "at pages/detail/detail.vue:50", this.banner_url);
      for (var i = 0; i < this.list.length; i++) {
        let item = this.list[i];
        let score = item["score"] * 100;
        item["score"] = parseInt(score + "");
      }
    },
    methods: {
      chooseAction(index) {
        this.choose_index = index;
      },
      viewMore(index) {
        var baike_url = this.list[index].baike_info.baike_url;
        uni.navigateTo({
          url: "/pages/webview/webview?baike_url=" + baike_url
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { style: { "height": "400rpx" } }, [
          vue.createElementVNode("image", {
            style: { "width": "100%", "height": "100%" },
            mode: "aspectFill",
            src: $data.banner_url
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { style: { "margin": "20rpx" } }, [
          vue.createElementVNode("text", { style: { "color": "black", "font-size": "14px", "font-weight": "700" } }, "可能结果")
        ]),
        vue.createElementVNode("view", {
          class: "layout_horizontal",
          style: { "margin-top": "30rpx" }
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { style: { "flex": "1", "width": "33.3%" } }, [
                vue.createElementVNode("view", {
                  class: "layout_vertical",
                  onClick: ($event) => $options.chooseAction(index)
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    mode: "aspectFill",
                    src: item["baike_info"]["image_url"] ? item["baike_info"]["image_url"] : "/static/logo.png"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { class: "black-text" },
                    vue.toDisplayString(item["name"]),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "green-text" },
                    vue.toDisplayString(item["score"]) + "%",
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"])
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", {
          style: { "margin": "20rpx", "display": "flex", "flex-direction": "column" },
          onClick: _cache[2] || (_cache[2] = ($event) => $options.viewMore($data.choose_index))
        }, [
          vue.createCommentVNode(` <text style="font-size: 15px;margin-bottom: 20rpx;">{{list[choose_index]['baike_info']['description']?list[choose_index]['baike_info']['description']:'暂无更多信息'}}</text> `),
          vue.createElementVNode("image", {
            style: { "width": "80%", "height": "400rpx", "align-self": "center", "border-radius": "20rpx" },
            mode: "aspectFill",
            src: $data.list[$data.choose_index]["baike_info"]["image_url"] ? $data.list[$data.choose_index]["baike_info"]["image_url"] : ""
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { style: { "margin": "20rpx", "display": "flex", "flex-direction": "column" } }, [
            vue.createElementVNode("text", {
              style: { "font-size": "15px", "margin-bottom": "10rpx", "color": "blue", "text-align": "center" },
              onClick: _cache[0] || (_cache[0] = ($event) => $options.viewMore($data.choose_index))
            }, "点此可观看"),
            vue.createElementVNode(
              "text",
              {
                style: { "font-size": "15px", "margin-bottom": "10rpx", "color": "blue", "text-align": "center" },
                onClick: _cache[1] || (_cache[1] = ($event) => $options.viewMore($data.choose_index))
              },
              vue.toDisplayString($data.list[$data.choose_index].name) + "视频介绍",
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("text", { class: "tips" }, "因花时，花果，光线，角度等因素，目前全国无法实现100%得出准确结果，当前结果仅供参考，具体还将以现实情况斟酌")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/kaiyang/Documents/HBuilderProjects/AI-project/pages/detail/detail.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        baike_url: ""
      };
    },
    onLoad: function(options) {
      this.baike_url = options.baike_url;
      formatAppLog("log", "at pages/webview/webview.vue:17", this.baike_url);
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("web-view", {
        "webview-styles": _ctx.webviewStyles,
        src: $data.baike_url
      }, null, 8, ["webview-styles", "src"])
    ]);
  }
  const PagesWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/kaiyang/Documents/HBuilderProjects/AI-project/pages/webview/webview.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/webview/webview", PagesWebviewWebview);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/kaiyang/Documents/HBuilderProjects/AI-project/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
