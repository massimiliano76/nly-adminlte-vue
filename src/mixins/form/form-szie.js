export default {
  props: {
    // 大小 sm,lg
    size: {
      type: String
    },
    col: {
      type: Boolean,
      default: false
    },
    xs: {
      type: String
    },
    sm: {
      type: String
    },
    md: {
      type: String
    },
    lg: {
      type: String
    },
    xl: {
      type: String
    },
    offsetXs: {
      type: String
    },
    offsetSm: {
      type: String
    },
    offsetMd: {
      type: String
    },
    offsetLg: {
      type: String
    },
    offsetXl: {
      type: String
    },
    orderXs: {
      type: String
    },
    orderSm: {
      type: String
    },
    orderMd: {
      type: String
    },
    orderLg: {
      type: String
    },
    orderXl: {
      type: String
    }
  },
  computed: {
    sizeFormClass() {
      return [this.size ? `form-control-${this.size}` : null];
    },
    sizeBtnClass() {
      return [this.size ? `btn-${this.size}` : null];
    },
    customCol: function() {
      return this.col ? "col" : "";
    },
    customXs: function() {
      return this.xs ? `col-${this.xs}` : "";
    },
    customSm: function() {
      return this.sm ? `col-sm-${this.sm}` : "";
    },
    customMd: function() {
      return this.md ? `col-md-${this.md}` : "";
    },
    customLg: function() {
      return this.lg ? `col-lg-${this.lg}` : "";
    },
    customXl: function() {
      return this.xl ? `col-xl-${this.xl}` : "";
    },
    customOffsetXs: function() {
      return this.offsetXs ? `offset-${this.offsetXs}` : "";
    },
    customOffsetSm: function() {
      return this.offsetSm ? `offset-sm-${this.offsetSm}` : "";
    },
    customOffsetMd: function() {
      return this.offsetMd ? `offset-md-${this.offsetMd}` : "";
    },
    customOffsetLg: function() {
      return this.offsetLg ? `offset-lg-${this.offsetLg}` : "";
    },
    customOffsetXl: function() {
      return this.offsetXl ? `offset-xl-${this.offsetXl}` : "";
    },
    customOrderXs: function() {
      return this.orderXs ? `order-${this.orderXs}` : "";
    },
    customOrderSm: function() {
      return this.orderSm ? `order-sm-${this.orderSm}` : "";
    },
    customOrderMd: function() {
      return this.orderMd ? `order-md-${this.orderMd}` : "";
    },
    customOrderLg: function() {
      return this.orderLg ? `order-lg-${this.orderLg}` : "";
    },
    customOrderXl: function() {
      return this.orderXl ? `order-xl-${this.orderXl}` : "";
    }
  }
};
