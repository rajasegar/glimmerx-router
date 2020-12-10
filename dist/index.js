function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

const EMPTY_ARRAY = Object.freeze([]);

// import Logger from './logger';
// let alreadyWarned = false;
function debugAssert(test, msg) {
  // if (!alreadyWarned) {
  //   alreadyWarned = true;
  //   Logger.warn("Don't leave debug assertions on in public builds");
  // }
  if (!test) {
    throw new Error(msg || 'assertion failure');
  }
}

let GUID = 0;
function initializeGuid(object) {
  return object._guid = ++GUID;
}

function dict() {
  return Object.create(null);
}
function isDict(u) {
  return u !== null && u !== undefined;
}
function isObject(u) {
  return typeof u === 'object' && u !== null;
}
class StackImpl {
  constructor() {
    this.stack = [];
    this.current = null;
  }

  get size() {
    return this.stack.length;
  }

  push(item) {
    this.current = item;
    this.stack.push(item);
  }

  pop() {
    let item = this.stack.pop();
    let len = this.stack.length;
    this.current = len === 0 ? null : this.stack[len - 1];
    return item === undefined ? null : item;
  }

  nth(from) {
    let len = this.stack.length;
    return len < from ? null : this.stack[len - from];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return this.stack;
  }

}

function clearElement(parent) {
  let current = parent.firstChild;

  while (current) {
    let next = current.nextSibling;
    parent.removeChild(current);
    current = next;
  }
}

const {
  keys: objKeys
} = Object;
function assign(obj) {
  for (let i = 1; i < arguments.length; i++) {
    let assignment = arguments[i];
    if (assignment === null || typeof assignment !== 'object') continue;
    let keys = objKeys(assignment);

    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      obj[key] = assignment[key];
    }
  }

  return obj;
}
function fillNulls(count) {
  let arr = new Array(count);

  for (let i = 0; i < count; i++) {
    arr[i] = null;
  }

  return arr;
}

function unreachable(message = 'unreachable') {
  return new Error(message);
}
function exhausted(value) {
  throw new Error(`Exhausted ${value}`);
}
const symbol = typeof Symbol !== 'undefined' ? Symbol : key => `__${key}${Math.floor(Math.random() * Date.now())}__`;

function isHandle(value) {
  return value >= 0;
}
function isNonPrimitiveHandle(value) {
  return value > 3
  /* ENCODED_UNDEFINED_HANDLE */
  ;
}
function constants(...values) {
  return [false, true, null, undefined, ...values];
}
function isSmallInt(value) {
  return value % 1 === 0 && value <= 536870911
  /* MAX_INT */
  && value >= -536870912
  /* MIN_INT */
  ;
}
function encodeNegative(num) {

  return num & -536870913
  /* SIGN_BIT */
  ;
}
function decodeNegative(num) {

  return num | ~-536870913
  /* SIGN_BIT */
  ;
}
function encodePositive(num) {

  return ~num;
}
function decodePositive(num) {

  return ~num;
}
function encodeHandle(num) {

  return num;
}
function decodeHandle(num) {

  return num;
}
function encodeImmediate(num) {
  num |= 0;
  return num < 0 ? encodeNegative(num) : encodePositive(num);
}
function decodeImmediate(num) {
  num |= 0;
  return num > -536870913
  /* SIGN_BIT */
  ? decodePositive(num) : decodeNegative(num);
} // Warm
[1, -1].forEach(x => decodeImmediate(encodeImmediate(x)));

function unwrapHandle(handle) {
  if (typeof handle === 'number') {
    return handle;
  } else {
    let error = handle.errors[0];
    throw new Error(`Compile Error: ${error.problem} @ ${error.span.start}..${error.span.end}`);
  }
}
function unwrapTemplate(template) {
  if (template.result === 'error') {
    throw new Error(`Compile Error: ${template.problem} @ ${template.span.start}..${template.span.end}`);
  }

  return template;
}

var _WeakSet = typeof WeakSet === 'function' ? WeakSet : class WeakSetPolyFill {
  constructor() {
    this._map = new WeakMap();
  }

  add(val) {
    this._map.set(val, true);

    return this;
  }

  delete(val) {
    return this._map.delete(val);
  }

  has(val) {
    return this._map.has(val);
  }

};

function assertNever(value, desc = 'unexpected unreachable branch') {
  console.log('unreachable', value);
  console.trace(`${desc} :: ${JSON.stringify(value)} (${value})`);
}

/* This file is generated by build/debug.js */
function isMachineOp(value) {
  return value >= 0 && value <= 15;
}

/**
 * Registers
 *
 * For the most part, these follows MIPS naming conventions, however the
 * register numbers are different.
 */
// $0 or $pc (program counter): pointer into `program` for the next insturction; -1 means exit
const $pc = 0; // $1 or $ra (return address): pointer into `program` for the return

const $ra = 1; // $2 or $fp (frame pointer): pointer into the `evalStack` for the base of the stack

const $fp = 2; // $3 or $sp (stack pointer): pointer into the `evalStack` for the top of the stack

const $sp = 3; // $4-$5 or $s0-$s1 (saved): callee saved general-purpose registers

const $s0 = 4;
const $s1 = 5; // $6-$7 or $t0-$t1 (temporaries): caller saved general-purpose registers

const $t0 = 6;
const $t1 = 7; // $8 or $v0 (return value)

const $v0 = 8;
function isLowLevelRegister(register) {
  return register <= $sp;
}
var SavedRegister;

(function (SavedRegister) {
  SavedRegister[SavedRegister["s0"] = 4] = "s0";
  SavedRegister[SavedRegister["s1"] = 5] = "s1";
})(SavedRegister || (SavedRegister = {}));

var TemporaryRegister;

(function (TemporaryRegister) {
  TemporaryRegister[TemporaryRegister["t0"] = 6] = "t0";
  TemporaryRegister[TemporaryRegister["t1"] = 7] = "t1";
})(TemporaryRegister || (TemporaryRegister = {}));

// the VM in other classes, but are not intended to be a part of
// Glimmer's API.

const INNER_VM = symbol('INNER_VM');
const DESTROYABLE_STACK = symbol('DESTROYABLE_STACK');
const STACKS = symbol('STACKS');
const REGISTERS = symbol('REGISTERS');
const HEAP = symbol('HEAP');
const CONSTANTS = symbol('CONSTANTS');
const ARGS = symbol('ARGS');

class CursorImpl {
  constructor(element, nextSibling) {
    this.element = element;
    this.nextSibling = nextSibling;
  }

}
class ConcreteBounds {
  constructor(parentNode, first, last) {
    this.parentNode = parentNode;
    this.first = first;
    this.last = last;
  }

  parentElement() {
    return this.parentNode;
  }

  firstNode() {
    return this.first;
  }

  lastNode() {
    return this.last;
  }

}
class SingleNodeBounds {
  constructor(parentNode, node) {
    this.parentNode = parentNode;
    this.node = node;
  }

  parentElement() {
    return this.parentNode;
  }

  firstNode() {
    return this.node;
  }

  lastNode() {
    return this.node;
  }

}
function move(bounds, reference) {
  let parent = bounds.parentElement();
  let first = bounds.firstNode();
  let last = bounds.lastNode();
  let current = first;

  while (true) {
    let next = current.nextSibling;
    parent.insertBefore(current, reference);

    if (current === last) {
      return next;
    }

    current = next;
  }
}
function clear(bounds) {
  let parent = bounds.parentElement();
  let first = bounds.firstNode();
  let last = bounds.lastNode();
  let current = first;

  while (true) {
    let next = current.nextSibling;
    parent.removeChild(current);

    if (current === last) {
      return next;
    }

    current = next;
  }
}

/**
 * This package contains global context functions for Glimmer. These functions
 * are set by the embedding environment and must be set before initial render.
 *
 * These functions should meet the following criteria:
 *
 * - Must be provided by the embedder, due to having framework specific
 *   behaviors (e.g. interop with classic Ember behaviors that should not be
 *   upstreamed) or to being out of scope for the VM (e.g. scheduling a
 *   revalidation)
 * - Never differ between render roots
 * - Never change over time
 *
 */

/**
 * Schedules a VM revalidation.
 *
 * Note: this has a default value so that tags can warm themselves when first loaded.
 */

let scheduleRevalidate = () => {};
/**
 * Schedules a destructor to run
 *
 * @param destroyable The destroyable being destroyed
 * @param destructor The destructor being scheduled
 */

let scheduleDestroy;
/**
 * Finalizes destruction
 *
 * @param finalizer finalizer function
 */

let scheduleDestroyed;
/**
 * Hook to provide iterators for `{{each}}` loops
 *
 * @param value The value to create an iterator for
 */

let toIterator;
/**
 * Hook to specify truthiness within Glimmer templates
 *
 * @param value The value to convert to a boolean
 */

let toBool;
/**
 * Hook for specifying how Glimmer should access properties in cases where it
 * needs to. For instance, accessing an object's values in templates.
 *
 * @param obj The object provided to get a value from
 * @param path The path to get the value from
 */

let getProp;
/**
 * Hook for specifying how Glimmer should update props in cases where it needs
 * to. For instance, when updating a template reference (e.g. 2-way-binding)
 *
 * @param obj The object provided to get a value from
 * @param prop The prop to set the value at
 * @param value The value to set the value to
 */

let setProp;
/**
 * Hook for specifying how Glimmer should access paths in cases where it needs
 * to. For instance, the `key` value of `{{each}}` loops.
 *
 * @param obj The object provided to get a value from
 * @param path The path to get the value from
 */

let getPath;
/**
 * Hook to warn if a style binding string or value was not marked as trusted
 * (e.g. HTMLSafe)
 */

let warnIfStyleNotTrusted;
function setGlobalContext(context) {

  scheduleRevalidate = context.scheduleRevalidate;
  scheduleDestroy = context.scheduleDestroy;
  scheduleDestroyed = context.scheduleDestroyed;
  toIterator = context.toIterator;
  toBool = context.toBool;
  getProp = context.getProp;
  setProp = context.setProp;
  getPath = context.getPath;
  warnIfStyleNotTrusted = context.warnIfStyleNotTrusted;
}

function normalizeStringValue(value) {
  if (isEmpty(value)) {
    return '';
  }

  return String(value);
}
function shouldCoerce(value) {
  return isString(value) || isEmpty(value) || typeof value === 'boolean' || typeof value === 'number';
}
function isEmpty(value) {
  return value === null || value === undefined || typeof value.toString !== 'function';
}
function isSafeString(value) {
  return typeof value === 'object' && value !== null && typeof value.toHTML === 'function';
}
function isNode(value) {
  return typeof value === 'object' && value !== null && typeof value.nodeType === 'number';
}
function isFragment(value) {
  return isNode(value) && value.nodeType === 11;
}
function isString(value) {
  return typeof value === 'string';
}

/*
 * @method normalizeProperty
 * @param element {HTMLElement}
 * @param slotName {String}
 * @returns {Object} { name, type }
 */
function normalizeProperty(element, slotName) {
  let type, normalized;

  if (slotName in element) {
    normalized = slotName;
    type = 'prop';
  } else {
    let lower = slotName.toLowerCase();

    if (lower in element) {
      type = 'prop';
      normalized = lower;
    } else {
      type = 'attr';
      normalized = slotName;
    }
  }

  if (type === 'prop' && (normalized.toLowerCase() === 'style' || preferAttr(element.tagName, normalized))) {
    type = 'attr';
  }

  return {
    normalized,
    type
  };
}
// * browser bug
// * strange spec outlier

const ATTR_OVERRIDES = {
  INPUT: {
    form: true,
    // Chrome 46.0.2464.0: 'autocorrect' in document.createElement('input') === false
    // Safari 8.0.7: 'autocorrect' in document.createElement('input') === false
    // Mobile Safari (iOS 8.4 simulator): 'autocorrect' in document.createElement('input') === true
    autocorrect: true,
    // Chrome 54.0.2840.98: 'list' in document.createElement('input') === true
    // Safari 9.1.3: 'list' in document.createElement('input') === false
    list: true
  },
  // element.form is actually a legitimate readOnly property, that is to be
  // mutated, but must be mutated by setAttribute...
  SELECT: {
    form: true
  },
  OPTION: {
    form: true
  },
  TEXTAREA: {
    form: true
  },
  LABEL: {
    form: true
  },
  FIELDSET: {
    form: true
  },
  LEGEND: {
    form: true
  },
  OBJECT: {
    form: true
  },
  BUTTON: {
    form: true
  }
};

function preferAttr(tagName, propName) {
  let tag = ATTR_OVERRIDES[tagName.toUpperCase()];
  return tag && tag[propName.toLowerCase()] || false;
}

const badProtocols = ['javascript:', 'vbscript:'];
const badTags = ['A', 'BODY', 'LINK', 'IMG', 'IFRAME', 'BASE', 'FORM'];
const badTagsForDataURI = ['EMBED'];
const badAttributes = ['href', 'src', 'background', 'action'];
const badAttributesForDataURI = ['src'];

function has(array, item) {
  return array.indexOf(item) !== -1;
}

function checkURI(tagName, attribute) {
  return (tagName === null || has(badTags, tagName)) && has(badAttributes, attribute);
}

function checkDataURI(tagName, attribute) {
  if (tagName === null) return false;
  return has(badTagsForDataURI, tagName) && has(badAttributesForDataURI, attribute);
}

function requiresSanitization(tagName, attribute) {
  return checkURI(tagName, attribute) || checkDataURI(tagName, attribute);
}
let protocolForUrl;

if (typeof URL === 'object' && URL !== null && // this is super annoying, TS thinks that URL **must** be a function so `URL.parse` check
// thinks it is `never` without this `as unknown as any`
typeof URL.parse === 'function') {
  // In Ember-land the `fastboot` package sets the `URL` global to `require('url')`
  // ultimately, this should be changed (so that we can either rely on the natural `URL` global
  // that exists) but for now we have to detect the specifc `FastBoot` case first
  //
  // a future version of `fastboot` will detect if this legacy URL setup is required (by
  // inspecting Ember version) and if new enough, it will avoid shadowing the `URL` global
  // constructor with `require('url')`.
  let nodeURL = URL;

  protocolForUrl = url => {
    let protocol = null;

    if (typeof url === 'string') {
      protocol = nodeURL.parse(url).protocol;
    }

    return protocol === null ? ':' : protocol;
  };
} else if (typeof URL === 'function') {
  protocolForUrl = _url => {
    try {
      let url = new URL(_url);
      return url.protocol;
    } catch (error) {
      // any non-fully qualified url string will trigger an error (because there is no
      // baseURI that we can provide; in that case we **know** that the protocol is
      // "safe" because it isn't specifically one of the `badProtocols` listed above
      // (and those protocols can never be the default baseURI)
      return ':';
    }
  };
} else {
  // fallback for IE11 support
  let parsingNode = document.createElement('a');

  protocolForUrl = url => {
    parsingNode.href = url;
    return parsingNode.protocol;
  };
}

function sanitizeAttributeValue(element, attribute, value) {
  let tagName = null;

  if (value === null || value === undefined) {
    return value;
  }

  if (isSafeString(value)) {
    return value.toHTML();
  }

  if (!element) {
    tagName = null;
  } else {
    tagName = element.tagName.toUpperCase();
  }

  let str = normalizeStringValue(value);

  if (checkURI(tagName, attribute)) {
    let protocol = protocolForUrl(str);

    if (has(badProtocols, protocol)) {
      return `unsafe:${str}`;
    }
  }

  if (checkDataURI(tagName, attribute)) {
    return `unsafe:${str}`;
  }

  return str;
}

function dynamicAttribute(element, attr, namespace, isTrusting = false) {
  let {
    tagName,
    namespaceURI
  } = element;
  let attribute = {
    element,
    name: attr,
    namespace
  };

  if (namespaceURI === "http://www.w3.org/2000/svg"
  /* SVG */
  ) {
      return buildDynamicAttribute(tagName, attr, attribute);
    }

  let {
    type,
    normalized
  } = normalizeProperty(element, attr);

  if (type === 'attr') {
    return buildDynamicAttribute(tagName, normalized, attribute);
  } else {
    return buildDynamicProperty(tagName, normalized, attribute);
  }
}

function buildDynamicAttribute(tagName, name, attribute) {
  if (requiresSanitization(tagName, name)) {
    return new SafeDynamicAttribute(attribute);
  } else {
    return new SimpleDynamicAttribute(attribute);
  }
}

function buildDynamicProperty(tagName, name, attribute) {
  if (requiresSanitization(tagName, name)) {
    return new SafeDynamicProperty(name, attribute);
  }

  if (isUserInputValue(tagName, name)) {
    return new InputValueDynamicAttribute(name, attribute);
  }

  if (isOptionSelected(tagName, name)) {
    return new OptionSelectedDynamicAttribute(name, attribute);
  }

  return new DefaultDynamicProperty(name, attribute);
}

class DynamicAttribute {
  constructor(attribute) {
    this.attribute = attribute;
  }

}
class SimpleDynamicAttribute extends DynamicAttribute {
  set(dom, value, _env) {
    let normalizedValue = normalizeValue(value);

    if (normalizedValue !== null) {
      let {
        name,
        namespace
      } = this.attribute;

      dom.__setAttribute(name, normalizedValue, namespace);
    }
  }

  update(value, _env) {
    let normalizedValue = normalizeValue(value);
    let {
      element,
      name
    } = this.attribute;

    if (normalizedValue === null) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, normalizedValue);
    }
  }

}
class DefaultDynamicProperty extends DynamicAttribute {
  constructor(normalizedName, attribute) {
    super(attribute);
    this.normalizedName = normalizedName;
  }

  set(dom, value, _env) {
    if (value !== null && value !== undefined) {
      this.value = value;

      dom.__setProperty(this.normalizedName, value);
    }
  }

  update(value, _env) {
    let {
      element
    } = this.attribute;

    if (this.value !== value) {
      element[this.normalizedName] = this.value = value;

      if (value === null || value === undefined) {
        this.removeAttribute();
      }
    }
  }

  removeAttribute() {
    // TODO this sucks but to preserve properties first and to meet current
    // semantics we must do this.
    let {
      element,
      namespace
    } = this.attribute;

    if (namespace) {
      element.removeAttributeNS(namespace, this.normalizedName);
    } else {
      element.removeAttribute(this.normalizedName);
    }
  }

}
class SafeDynamicProperty extends DefaultDynamicProperty {
  set(dom, value, env) {
    let {
      element,
      name
    } = this.attribute;
    let sanitized = sanitizeAttributeValue(element, name, value);
    super.set(dom, sanitized, env);
  }

  update(value, env) {
    let {
      element,
      name
    } = this.attribute;
    let sanitized = sanitizeAttributeValue(element, name, value);
    super.update(sanitized, env);
  }

}
class SafeDynamicAttribute extends SimpleDynamicAttribute {
  set(dom, value, env) {
    let {
      element,
      name
    } = this.attribute;
    let sanitized = sanitizeAttributeValue(element, name, value);
    super.set(dom, sanitized, env);
  }

  update(value, env) {
    let {
      element,
      name
    } = this.attribute;
    let sanitized = sanitizeAttributeValue(element, name, value);
    super.update(sanitized, env);
  }

}
class InputValueDynamicAttribute extends DefaultDynamicProperty {
  set(dom, value) {
    dom.__setProperty('value', normalizeStringValue(value));
  }

  update(value) {
    let input = this.attribute.element;
    let currentValue = input.value;
    let normalizedValue = normalizeStringValue(value);

    if (currentValue !== normalizedValue) {
      input.value = normalizedValue;
    }
  }

}
class OptionSelectedDynamicAttribute extends DefaultDynamicProperty {
  set(dom, value) {
    if (value !== null && value !== undefined && value !== false) {
      dom.__setProperty('selected', true);
    }
  }

  update(value) {
    let option = this.attribute.element;

    if (value) {
      option.selected = true;
    } else {
      option.selected = false;
    }
  }

}

function isOptionSelected(tagName, attribute) {
  return tagName === 'OPTION' && attribute === 'selected';
}

function isUserInputValue(tagName, attribute) {
  return (tagName === 'INPUT' || tagName === 'TEXTAREA') && attribute === 'value';
}

function normalizeValue(value) {
  if (value === false || value === undefined || value === null || typeof value.toString === 'undefined') {
    return null;
  }

  if (value === true) {
    return '';
  } // onclick function etc in SSR


  if (typeof value === 'function') {
    return null;
  }

  return String(value);
}

let DESTROYABLE_META = new WeakMap();

function push(collection, newItem) {
  if (collection === null) {
    return newItem;
  } else if (Array.isArray(collection)) {
    collection.push(newItem);
    return collection;
  } else {
    return [collection, newItem];
  }
}

function iterate(collection, fn) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      fn(collection[i]);
    }
  } else if (collection !== null) {
    fn(collection);
  }
}

function remove(collection, item, message) {

  if (Array.isArray(collection) && collection.length > 1) {
    let index = collection.indexOf(item);
    collection.splice(index, 1);
    return collection;
  } else {
    return null;
  }
}

function getDestroyableMeta(destroyable) {
  let meta = DESTROYABLE_META.get(destroyable);

  if (meta === undefined) {
    meta = {
      parents: null,
      children: null,
      eagerDestructors: null,
      destructors: null,
      state: 0
      /* Live */

    };

    DESTROYABLE_META.set(destroyable, meta);
  }

  return meta;
}

function associateDestroyableChild(parent, child) {

  let parentMeta = getDestroyableMeta(parent);
  let childMeta = getDestroyableMeta(child);
  parentMeta.children = push(parentMeta.children, child);
  childMeta.parents = push(childMeta.parents, parent);
  return child;
}
function registerDestructor(destroyable, destructor, eager = false) {

  let meta = getDestroyableMeta(destroyable);
  let destructorsKey = eager === true ? 'eagerDestructors' : 'destructors';
  meta[destructorsKey] = push(meta[destructorsKey], destructor);
  return destructor;
}

function destroy(destroyable) {
  let meta = getDestroyableMeta(destroyable);
  if (meta.state >= 1
  /* Destroying */
  ) return;
  let {
    parents,
    children,
    eagerDestructors,
    destructors
  } = meta;
  meta.state = 1
  /* Destroying */
  ;
  iterate(children, destroy);
  iterate(eagerDestructors, destructor => destructor(destroyable));
  iterate(destructors, destructor => scheduleDestroy(destroyable, destructor));
  scheduleDestroyed(() => {
    iterate(parents, parent => removeChildFromParent(destroyable, parent));
    meta.state = 2
    /* Destroyed */
    ;
  });
}

function removeChildFromParent(child, parent) {
  let parentMeta = getDestroyableMeta(parent);

  if (parentMeta.state === 0
  /* Live */
  ) {
      parentMeta.children = remove(parentMeta.children, child);
    }
}

function destroyChildren(destroyable) {
  let {
    children
  } = getDestroyableMeta(destroyable);
  iterate(children, destroy);
}

var _a;

class First {
  constructor(node) {
    this.node = node;
  }

  firstNode() {
    return this.node;
  }

}

class Last {
  constructor(node) {
    this.node = node;
  }

  lastNode() {
    return this.node;
  }

}
const CURSOR_STACK = symbol('CURSOR_STACK');
class NewElementBuilder {
  constructor(env, parentNode, nextSibling) {
    this.constructing = null;
    this.operations = null;
    this[_a] = new StackImpl();
    this.modifierStack = new StackImpl();
    this.blockStack = new StackImpl();
    this.pushElement(parentNode, nextSibling);
    this.env = env;
    this.dom = env.getAppendOperations();
    this.updateOperations = env.getDOM();
  }

  static forInitialRender(env, cursor) {
    return new this(env, cursor.element, cursor.nextSibling).initialize();
  }

  static resume(env, block) {
    let parentNode = block.parentElement();
    let nextSibling = block.reset(env);
    let stack = new this(env, parentNode, nextSibling).initialize();
    stack.pushLiveBlock(block);
    return stack;
  }

  initialize() {
    this.pushSimpleBlock();
    return this;
  }

  debugBlocks() {
    return this.blockStack.toArray();
  }

  get element() {
    return this[CURSOR_STACK].current.element;
  }

  get nextSibling() {
    return this[CURSOR_STACK].current.nextSibling;
  }

  get hasBlocks() {
    return this.blockStack.size > 0;
  }

  block() {
    return this.blockStack.current;
  }

  popElement() {
    this[CURSOR_STACK].pop();
    this[CURSOR_STACK].current;
  }

  pushSimpleBlock() {
    return this.pushLiveBlock(new SimpleLiveBlock(this.element));
  }

  pushUpdatableBlock() {
    return this.pushLiveBlock(new UpdatableBlockImpl(this.element));
  }

  pushBlockList(list) {
    return this.pushLiveBlock(new LiveBlockList(this.element, list));
  }

  pushLiveBlock(block, isRemote = false) {
    let current = this.blockStack.current;

    if (current !== null) {
      if (!isRemote) {
        current.didAppendBounds(block);
      }
    }

    this.__openBlock();

    this.blockStack.push(block);
    return block;
  }

  popBlock() {
    this.block().finalize(this);

    this.__closeBlock();

    return this.blockStack.pop();
  }

  __openBlock() {}

  __closeBlock() {} // todo return seems unused


  openElement(tag) {
    let element = this.__openElement(tag);

    this.constructing = element;
    return element;
  }

  __openElement(tag) {
    return this.dom.createElement(tag, this.element);
  }

  flushElement(modifiers) {
    let parent = this.element;
    let element = this.constructing;

    this.__flushElement(parent, element);

    this.constructing = null;
    this.operations = null;
    this.pushModifiers(modifiers);
    this.pushElement(element, null);
    this.didOpenElement(element);
  }

  __flushElement(parent, constructing) {
    this.dom.insertBefore(parent, constructing, this.nextSibling);
  }

  closeElement() {
    this.willCloseElement();
    this.popElement();
    return this.popModifiers();
  }

  pushRemoteElement(element, guid, insertBefore) {
    return this.__pushRemoteElement(element, guid, insertBefore);
  }

  __pushRemoteElement(element, _guid, insertBefore) {
    this.pushElement(element, insertBefore);

    if (insertBefore === undefined) {
      while (element.lastChild) {
        element.removeChild(element.lastChild);
      }
    }

    let block = new RemoteLiveBlock(element);
    return this.pushLiveBlock(block, true);
  }

  popRemoteElement() {
    this.popBlock();
    this.popElement();
  }

  pushElement(element, nextSibling = null) {
    this[CURSOR_STACK].push(new CursorImpl(element, nextSibling));
  }

  pushModifiers(modifiers) {
    this.modifierStack.push(modifiers);
  }

  popModifiers() {
    return this.modifierStack.pop();
  }

  didAppendBounds(bounds) {
    this.block().didAppendBounds(bounds);
    return bounds;
  }

  didAppendNode(node) {
    this.block().didAppendNode(node);
    return node;
  }

  didOpenElement(element) {
    this.block().openElement(element);
    return element;
  }

  willCloseElement() {
    this.block().closeElement();
  }

  appendText(string) {
    return this.didAppendNode(this.__appendText(string));
  }

  __appendText(text) {
    let {
      dom,
      element,
      nextSibling
    } = this;
    let node = dom.createTextNode(text);
    dom.insertBefore(element, node, nextSibling);
    return node;
  }

  __appendNode(node) {
    this.dom.insertBefore(this.element, node, this.nextSibling);
    return node;
  }

  __appendFragment(fragment) {
    let first = fragment.firstChild;

    if (first) {
      let ret = new ConcreteBounds(this.element, first, fragment.lastChild);
      this.dom.insertBefore(this.element, fragment, this.nextSibling);
      return ret;
    } else {
      return new SingleNodeBounds(this.element, this.__appendComment(''));
    }
  }

  __appendHTML(html) {
    return this.dom.insertHTMLBefore(this.element, this.nextSibling, html);
  }

  appendDynamicHTML(value) {
    let bounds = this.trustedContent(value);
    this.didAppendBounds(bounds);
  }

  appendDynamicText(value) {
    let node = this.untrustedContent(value);
    this.didAppendNode(node);
    return node;
  }

  appendDynamicFragment(value) {
    let bounds = this.__appendFragment(value);

    this.didAppendBounds(bounds);
  }

  appendDynamicNode(value) {
    let node = this.__appendNode(value);

    let bounds = new SingleNodeBounds(this.element, node);
    this.didAppendBounds(bounds);
  }

  trustedContent(value) {
    return this.__appendHTML(value);
  }

  untrustedContent(value) {
    return this.__appendText(value);
  }

  appendComment(string) {
    return this.didAppendNode(this.__appendComment(string));
  }

  __appendComment(string) {
    let {
      dom,
      element,
      nextSibling
    } = this;
    let node = dom.createComment(string);
    dom.insertBefore(element, node, nextSibling);
    return node;
  }

  __setAttribute(name, value, namespace) {
    this.dom.setAttribute(this.constructing, name, value, namespace);
  }

  __setProperty(name, value) {
    this.constructing[name] = value;
  }

  setStaticAttribute(name, value, namespace) {
    this.__setAttribute(name, value, namespace);
  }

  setDynamicAttribute(name, value, trusting, namespace) {
    let element = this.constructing;
    let attribute = dynamicAttribute(element, name, namespace, trusting);
    attribute.set(this, value, this.env);
    return attribute;
  }

}
_a = CURSOR_STACK;
class SimpleLiveBlock {
  constructor(parent) {
    this.parent = parent;
    this.first = null;
    this.last = null;
    this.nesting = 0;
  }

  parentElement() {
    return this.parent;
  }

  firstNode() {
    let first = this.first;
    return first.firstNode();
  }

  lastNode() {
    let last = this.last;
    return last.lastNode();
  }

  openElement(element) {
    this.didAppendNode(element);
    this.nesting++;
  }

  closeElement() {
    this.nesting--;
  }

  didAppendNode(node) {
    if (this.nesting !== 0) return;

    if (!this.first) {
      this.first = new First(node);
    }

    this.last = new Last(node);
  }

  didAppendBounds(bounds) {
    if (this.nesting !== 0) return;

    if (!this.first) {
      this.first = bounds;
    }

    this.last = bounds;
  }

  finalize(stack) {
    if (this.first === null) {
      stack.appendComment('');
    }
  }

}
class RemoteLiveBlock extends SimpleLiveBlock {
  constructor(parent) {
    super(parent);
    registerDestructor(this, () => {
      // In general, you only need to clear the root of a hierarchy, and should never
      // need to clear any child nodes. This is an important constraint that gives us
      // a strong guarantee that clearing a subtree is a single DOM operation.
      //
      // Because remote blocks are not normally physically nested inside of the tree
      // that they are logically nested inside, we manually clear remote blocks when
      // a logical parent is cleared.
      //
      // HOWEVER, it is currently possible for a remote block to be physically nested
      // inside of the block it is logically contained inside of. This happens when
      // the remote block is appended to the end of the application's entire element.
      //
      // The problem with that scenario is that Glimmer believes that it owns more of
      // the DOM than it actually does. The code is attempting to write past the end
      // of the Glimmer-managed root, but Glimmer isn't aware of that.
      //
      // The correct solution to that problem is for Glimmer to be aware of the end
      // of the bounds that it owns, and once we make that change, this check could
      // be removed.
      //
      // For now, a more targeted fix is to check whether the node was already removed
      // and avoid clearing the node if it was. In most cases this shouldn't happen,
      // so this might hide bugs where the code clears nested nodes unnecessarily,
      // so we should eventually try to do the correct fix.
      if (this.parentElement() === this.firstNode().parentNode) {
        clear(this);
      }
    });
  }

}
class UpdatableBlockImpl extends SimpleLiveBlock {
  reset() {
    destroy(this);
    let nextSibling = clear(this);
    this.first = null;
    this.last = null;
    this.nesting = 0;
    return nextSibling;
  }

} // FIXME: All the noops in here indicate a modelling problem

class LiveBlockList {
  constructor(parent, boundList) {
    this.parent = parent;
    this.boundList = boundList;
    this.parent = parent;
    this.boundList = boundList;
  }

  parentElement() {
    return this.parent;
  }

  firstNode() {
    let head = this.boundList[0];
    return head.firstNode();
  }

  lastNode() {
    let boundList = this.boundList;
    let tail = boundList[boundList.length - 1];
    return tail.lastNode();
  }

  openElement(_element) {
  }

  closeElement() {
  }

  didAppendNode(_node) {
  }

  didAppendBounds(_bounds) {}

  finalize(_stack) {
  }

}
function clientBuilder(env, cursor) {
  return NewElementBuilder.forInitialRender(env, cursor);
}

// eslint-disable-next-line @typescript-eslint/ban-types
function indexable(input) {
  return input;
} // This is a duplicate utility from @glimmer/util because `@glimmer/validator`
// should not depend on any other @glimmer packages, in order to avoid pulling
// in types and prevent regressions in `@glimmer/tracking` (which has public types).

const symbol$1 = typeof Symbol !== 'undefined' ? Symbol : // eslint-disable-next-line @typescript-eslint/no-explicit-any
key => `__${key}${Math.floor(Math.random() * Date.now())}__`; // eslint-disable-next-line @typescript-eslint/no-explicit-any

const symbolFor = typeof Symbol !== 'undefined' ? Symbol.for : key => `__GLIMMER_VALIDATOR_SYMBOL_FOR_${key}`;
function getGlobal() {
  // eslint-disable-next-line node/no-unsupported-features/es-builtins
  if (typeof globalThis !== 'undefined') return indexable(globalThis);
  if (typeof self !== 'undefined') return indexable(self);
  if (typeof window !== 'undefined') return indexable(window);
  if (typeof global !== 'undefined') return indexable(global);
  throw new Error('unable to locate global object');
}
function unwrap(val) {
  if (val === null || val === undefined) throw new Error(`Expected value to be present`);
  return val;
}

const INITIAL = 1;
let $REVISION = INITIAL;

const COMPUTE = symbol$1('TAG_COMPUTE'); //////////

/**
 * `value` receives a tag and returns an opaque Revision based on that tag. This
 * snapshot can then later be passed to `validate` with the same tag to
 * determine if the tag has changed at all since the time that `value` was
 * called.
 *
 * @param tag
 */

function valueForTag(tag) {
  return tag[COMPUTE]();
}
/**
 * `validate` receives a tag and a snapshot from a previous call to `value` with
 * the same tag, and determines if the tag is still valid compared to the
 * snapshot. If the tag's state has changed at all since then, `validate` will
 * return false, otherwise it will return true. This is used to determine if a
 * calculation related to the tags should be rerun.
 *
 * @param tag
 * @param snapshot
 */

function validateTag(tag, snapshot) {
  return snapshot >= tag[COMPUTE]();
}
const TYPE = symbol$1('TAG_TYPE'); // this is basically a const

class MonomorphicTagImpl {
  constructor(type) {
    this.revision = INITIAL;
    this.lastChecked = INITIAL;
    this.lastValue = INITIAL;
    this.isUpdating = false;
    this.subtag = null;
    this.subtagBufferCache = null;
    this[TYPE] = type;
  }

  static combine(tags) {
    switch (tags.length) {
      case 0:
        return CONSTANT_TAG;

      case 1:
        return tags[0];

      default:
        let tag = new MonomorphicTagImpl(2
        /* Combinator */
        );
        tag.subtag = tags;
        return tag;
    }
  }

  [COMPUTE]() {
    let {
      lastChecked
    } = this;

    if (this.isUpdating === true) {

      this.lastChecked = ++$REVISION;
    } else if (lastChecked !== $REVISION) {
      this.isUpdating = true;
      this.lastChecked = $REVISION;

      try {
        let {
          subtag,
          revision
        } = this;

        if (subtag !== null) {
          if (Array.isArray(subtag)) {
            for (let i = 0; i < subtag.length; i++) {
              let value = subtag[i][COMPUTE]();
              revision = Math.max(value, revision);
            }
          } else {
            let subtagValue = subtag[COMPUTE]();

            if (subtagValue === this.subtagBufferCache) {
              revision = Math.max(revision, this.lastValue);
            } else {
              // Clear the temporary buffer cache
              this.subtagBufferCache = null;
              revision = Math.max(revision, subtagValue);
            }
          }
        }

        this.lastValue = revision;
      } finally {
        this.isUpdating = false;
      }
    }

    return this.lastValue;
  }

  static updateTag(_tag, _subtag) {


    let tag = _tag;
    let subtag = _subtag;

    if (subtag === CONSTANT_TAG) {
      tag.subtag = null;
    } else {
      // There are two different possibilities when updating a subtag:
      //
      // 1. subtag[COMPUTE]() <= tag[COMPUTE]();
      // 2. subtag[COMPUTE]() > tag[COMPUTE]();
      //
      // The first possibility is completely fine within our caching model, but
      // the second possibility presents a problem. If the parent tag has
      // already been read, then it's value is cached and will not update to
      // reflect the subtag's greater value. Next time the cache is busted, the
      // subtag's value _will_ be read, and it's value will be _greater_ than
      // the saved snapshot of the parent, causing the resulting calculation to
      // be rerun erroneously.
      //
      // In order to prevent this, when we first update to a new subtag we store
      // its computed value, and then check against that computed value on
      // subsequent updates. If its value hasn't changed, then we return the
      // parent's previous value. Once the subtag changes for the first time,
      // we clear the cache and everything is finally in sync with the parent.
      tag.subtagBufferCache = subtag[COMPUTE]();
      tag.subtag = subtag;
    }
  }

  static dirtyTag(tag) {

    tag.revision = ++$REVISION;
    scheduleRevalidate();
  }

}

const DIRTY_TAG = MonomorphicTagImpl.dirtyTag;
const UPDATE_TAG = MonomorphicTagImpl.updateTag; //////////

function createTag() {
  return new MonomorphicTagImpl(0
  /* Dirtyable */
  );
}
function createUpdatableTag() {
  return new MonomorphicTagImpl(1
  /* Updatable */
  );
} //////////

const CONSTANT_TAG = new MonomorphicTagImpl(3
/* Constant */
);

const combine = MonomorphicTagImpl.combine; // Warm

let tag1 = createUpdatableTag();
let tag2 = createUpdatableTag();
let tag3 = createUpdatableTag();
valueForTag(tag1);
DIRTY_TAG(tag1);
valueForTag(tag1);
UPDATE_TAG(tag1, combine([tag2, tag3]));
valueForTag(tag1);
DIRTY_TAG(tag2);
valueForTag(tag1);
DIRTY_TAG(tag3);
valueForTag(tag1);
UPDATE_TAG(tag1, tag3);
valueForTag(tag1);
DIRTY_TAG(tag3);
valueForTag(tag1);

const TRACKED_TAGS = new WeakMap();
function dirtyTagFor(obj, key, meta) {

  let tags = meta === undefined ? TRACKED_TAGS.get(obj) : meta; // No tags have been setup for this object yet, return

  if (tags === undefined) return; // Dirty the tag for the specific property if it exists

  let propertyTag = tags.get(key);

  if (propertyTag !== undefined) {

    DIRTY_TAG(propertyTag);
  }
}
function tagMetaFor(obj) {
  let tags = TRACKED_TAGS.get(obj);

  if (tags === undefined) {
    tags = new Map();
    TRACKED_TAGS.set(obj, tags);
  }

  return tags;
}
function tagFor(obj, key, meta) {
  let tags = meta === undefined ? tagMetaFor(obj) : meta;
  let tag = tags.get(key);

  if (tag === undefined) {
    tag = createUpdatableTag();
    tags.set(key, tag);
  }

  return tag;
}

/**
 * An object that that tracks @tracked properties that were consumed.
 */

class Tracker {
  constructor() {
    this.tags = new Set();
    this.last = null;
  }

  add(tag) {
    if (tag === CONSTANT_TAG) return;
    this.tags.add(tag);

    this.last = tag;
  }

  combine() {
    let {
      tags
    } = this;

    if (tags.size === 0) {
      return CONSTANT_TAG;
    } else if (tags.size === 1) {
      return this.last;
    } else {
      let tagsArr = [];
      tags.forEach(tag => tagsArr.push(tag));
      return combine(tagsArr);
    }
  }

}
/**
 * Whenever a tracked computed property is entered, the current tracker is
 * saved off and a new tracker is replaced.
 *
 * Any tracked properties consumed are added to the current tracker.
 *
 * When a tracked computed property is exited, the tracker's tags are
 * combined and added to the parent tracker.
 *
 * The consequence is that each tracked computed property has a tag
 * that corresponds to the tracked properties consumed inside of
 * itself, including child tracked computed properties.
 */


let CURRENT_TRACKER = null;
const OPEN_TRACK_FRAMES = [];
function beginTrackFrame(debuggingContext) {
  OPEN_TRACK_FRAMES.push(CURRENT_TRACKER);
  CURRENT_TRACKER = new Tracker();
}
function endTrackFrame() {
  let current = CURRENT_TRACKER;

  CURRENT_TRACKER = OPEN_TRACK_FRAMES.pop() || null;
  return unwrap(current).combine();
}
function beginUntrackFrame() {
  OPEN_TRACK_FRAMES.push(CURRENT_TRACKER);
  CURRENT_TRACKER = null;
}
function endUntrackFrame() {

  CURRENT_TRACKER = OPEN_TRACK_FRAMES.pop() || null;
} // This function is only for handling errors and resetting to a valid state
function consumeTag(tag) {
  if (CURRENT_TRACKER !== null) {
    CURRENT_TRACKER.add(tag);
  }
} //////////
// Legacy tracking APIs
// track() shouldn't be necessary at all in the VM once the autotracking
// refactors are merged, and we should generally be moving away from it. It may
// be necessary in Ember for a while longer, but I think we'll be able to drop
// it in favor of cache sooner rather than later.


function track(callback, debugLabel) {
  beginTrackFrame();
  let tag;

  try {
    callback();
  } finally {
    tag = endTrackFrame();
  }

  return tag;
} // untrack() is currently mainly used to handle places that were previously not
// tracked, and that tracking now would cause backtracking rerender assertions.
// I think once we move everyone forward onto modern APIs, we'll probably be
// able to remove it, but I'm not sure yet.

function untrack(callback) {
  beginUntrackFrame();

  try {
    return callback();
  } finally {
    endUntrackFrame();
  }
}

function trackedData(key, initializer) {
  let values = new WeakMap();
  let hasInitializer = typeof initializer === 'function';

  function getter(self) {
    consumeTag(tagFor(self, key));
    let value; // If the field has never been initialized, we should initialize it

    if (hasInitializer && !values.has(self)) {
      value = initializer.call(self);
      values.set(self, value);
    } else {
      value = values.get(self);
    }

    return value;
  }

  function setter(self, value) {

    dirtyTagFor(self, key);
    values.set(self, value);
  }

  return {
    getter,
    setter
  };
}

const GLIMMER_VALIDATOR_REGISTRATION = symbolFor('GLIMMER_VALIDATOR_REGISTRATION');
const globalObj = getGlobal();

if (globalObj[GLIMMER_VALIDATOR_REGISTRATION] === true) {
  throw new Error('The `@glimmer/validator` library has been included twice in this application. It could be different versions of the package, or the same version included twice by mistake. `@glimmer/validator` depends on having a single copy of the package in use at any time in an application, even if they are the same version. You must dedupe your build to remove the duplicate packages in order to prevent this error.');
}

globalObj[GLIMMER_VALIDATOR_REGISTRATION] = true;

const REFERENCE = symbol('REFERENCE');

class ReferenceImpl {
  constructor(type) {
    this.tag = null;
    this.lastRevision = INITIAL;
    this.children = null;
    this.compute = null;
    this.update = null;
    this[REFERENCE] = type;
  }

}

function createPrimitiveRef(value) {
  let ref = new ReferenceImpl(2
  /* Unbound */
  );
  ref.tag = CONSTANT_TAG;
  ref.lastValue = value;

  return ref;
}
const UNDEFINED_REFERENCE = createPrimitiveRef(undefined);
const NULL_REFERENCE = createPrimitiveRef(null);
const TRUE_REFERENCE = createPrimitiveRef(true);
const FALSE_REFERENCE = createPrimitiveRef(false);
function createConstRef(value, debugLabel) {
  let ref = new ReferenceImpl(0
  /* Constant */
  );
  ref.lastValue = value;
  ref.tag = CONSTANT_TAG;

  return ref;
}
function createUnboundRef(value, debugLabel) {
  let ref = new ReferenceImpl(2
  /* Unbound */
  );
  ref.lastValue = value;
  ref.tag = CONSTANT_TAG;

  return ref;
}
function createComputeRef(compute, update = null, debugLabel = 'unknown') {
  let ref = new ReferenceImpl(1
  /* Compute */
  );
  ref.compute = compute;
  ref.update = update;

  return ref;
}
function isConstRef(_ref) {
  let ref = _ref;
  return ref.tag === CONSTANT_TAG;
}
function valueForRef(_ref) {
  let ref = _ref;
  let {
    tag
  } = ref;

  if (tag === CONSTANT_TAG) {
    return ref.lastValue;
  }

  let {
    lastRevision
  } = ref;
  let lastValue;

  if (tag === null || !validateTag(tag, lastRevision)) {
    let {
      compute
    } = ref;
    tag = ref.tag = track(() => {
      lastValue = ref.lastValue = compute();
    });
    ref.lastRevision = valueForTag(tag);
  } else {
    lastValue = ref.lastValue;
  }

  consumeTag(tag);
  return lastValue;
}
function updateRef(_ref, value) {
  let ref = _ref;
  let update = ref.update;
  update(value);
}
function childRefFor(_parentRef, path) {
  let parentRef = _parentRef;
  let type = parentRef[REFERENCE];
  let children = parentRef.children;
  let child;

  if (children === null) {
    children = parentRef.children = new Map();
  } else {
    child = children.get(path);

    if (child !== undefined) {
      return child;
    }
  }

  if (type === 2
  /* Unbound */
  ) {
      let parent = valueForRef(parentRef);

      if (isDict(parent)) {
        child = createUnboundRef(parent[path]);
      } else {
        child = UNDEFINED_REFERENCE;
      }
    } else {
    child = createComputeRef(() => {
      let parent = valueForRef(parentRef);

      if (isDict(parent)) {
        return getProp(parent, path);
      }
    }, val => {
      let parent = valueForRef(parentRef);

      if (isDict(parent)) {
        return setProp(parent, path, val);
      }
    });
  }

  children.set(path, child);
  return child;
}

const NULL_IDENTITY = {};

const KEY = (_, index) => index;

const INDEX = (_, index) => String(index);

const IDENTITY = item => {
  if (item === null) {
    // Returning null as an identity will cause failures since the iterator
    // can't tell that it's actually supposed to be null
    return NULL_IDENTITY;
  }

  return item;
};

function keyForPath(path) {

  return uniqueKeyFor(item => getPath(item, path));
}

function makeKeyFor(key) {
  switch (key) {
    case '@key':
      return uniqueKeyFor(KEY);

    case '@index':
      return uniqueKeyFor(INDEX);

    case '@identity':
      return uniqueKeyFor(IDENTITY);

    default:
      return keyForPath(key);
  }
}

class WeakMapWithPrimitives {
  get weakMap() {
    if (this._weakMap === undefined) {
      this._weakMap = new WeakMap();
    }

    return this._weakMap;
  }

  get primitiveMap() {
    if (this._primitiveMap === undefined) {
      this._primitiveMap = new Map();
    }

    return this._primitiveMap;
  }

  set(key, value) {
    if (isObject(key) || typeof key === 'function') {
      this.weakMap.set(key, value);
    } else {
      this.primitiveMap.set(key, value);
    }
  }

  get(key) {
    if (isObject(key) || typeof key === 'function') {
      return this.weakMap.get(key);
    } else {
      return this.primitiveMap.get(key);
    }
  }

}

const IDENTITIES = new WeakMapWithPrimitives();

function identityForNthOccurence(value, count) {
  let identities = IDENTITIES.get(value);

  if (identities === undefined) {
    identities = [];
    IDENTITIES.set(value, identities);
  }

  let identity = identities[count];

  if (identity === undefined) {
    identity = {
      value,
      count
    };
    identities[count] = identity;
  }

  return identity;
}
/**
 * When iterating over a list, it's possible that an item with the same unique
 * key could be encountered twice:
 *
 * ```js
 * let arr = ['same', 'different', 'same', 'same'];
 * ```
 *
 * In general, we want to treat these items as _unique within the list_. To do
 * this, we track the occurences of every item as we iterate the list, and when
 * an item occurs more than once, we generate a new unique key just for that
 * item, and that occurence within the list. The next time we iterate the list,
 * and encounter an item for the nth time, we can get the _same_ key, and let
 * Glimmer know that it should reuse the DOM for the previous nth occurence.
 */


function uniqueKeyFor(keyFor) {
  let seen = new WeakMapWithPrimitives();
  return (value, memo) => {
    let key = keyFor(value, memo);
    let count = seen.get(key) || 0;
    seen.set(key, count + 1);

    if (count === 0) {
      return key;
    }

    return identityForNthOccurence(key, count);
  };
}

function createIteratorRef(listRef, key) {
  return createComputeRef(() => {
    let iterable = valueForRef(listRef);
    let keyFor = makeKeyFor(key);

    if (Array.isArray(iterable)) {
      return new ArrayIterator(iterable, keyFor);
    }

    let maybeIterator = toIterator(iterable);

    if (maybeIterator === null) {
      return new ArrayIterator(EMPTY_ARRAY, () => null);
    }

    return new IteratorWrapper(maybeIterator, keyFor);
  });
}
function createIteratorItemRef(_value) {
  let value = _value;
  let tag = createTag();
  return createComputeRef(() => {
    consumeTag(tag);
    return value;
  }, newValue => {
    if (value !== newValue) {
      value = newValue;
      DIRTY_TAG(tag);
    }
  });
}

class IteratorWrapper {
  constructor(inner, keyFor) {
    this.inner = inner;
    this.keyFor = keyFor;
  }

  isEmpty() {
    return this.inner.isEmpty();
  }

  next() {
    let nextValue = this.inner.next();

    if (nextValue !== null) {
      nextValue.key = this.keyFor(nextValue.value, nextValue.memo);
    }

    return nextValue;
  }

}

class ArrayIterator {
  constructor(iterator, keyFor) {
    this.iterator = iterator;
    this.keyFor = keyFor;
    this.pos = 0;

    if (iterator.length === 0) {
      this.current = {
        kind: 'empty'
      };
    } else {
      this.current = {
        kind: 'first',
        value: iterator[this.pos]
      };
    }
  }

  isEmpty() {
    return this.current.kind === 'empty';
  }

  next() {
    let value;
    let current = this.current;

    if (current.kind === 'first') {
      this.current = {
        kind: 'progress'
      };
      value = current.value;
    } else if (this.pos >= this.iterator.length - 1) {
      return null;
    } else {
      value = this.iterator[++this.pos];
    }

    let {
      keyFor
    } = this;
    let key = keyFor(value, this.pos);
    let memo = this.pos;
    return {
      key,
      value,
      memo
    };
  }

}

class DynamicScopeImpl {
  constructor(bucket) {
    if (bucket) {
      this.bucket = assign({}, bucket);
    } else {
      this.bucket = {};
    }
  }

  get(key) {
    return this.bucket[key];
  }

  set(key, reference) {
    return this.bucket[key] = reference;
  }

  child() {
    return new DynamicScopeImpl(this.bucket);
  }

}
class PartialScopeImpl {
  constructor( // the 0th slot is `self`
  slots, callerScope, // named arguments and blocks passed to a layout that uses eval
  evalScope, // locals in scope when the partial was invoked
  partialMap) {
    this.slots = slots;
    this.callerScope = callerScope;
    this.evalScope = evalScope;
    this.partialMap = partialMap;
  }

  static root(self, size = 0) {
    let refs = new Array(size + 1);

    for (let i = 0; i <= size; i++) {
      refs[i] = UNDEFINED_REFERENCE;
    }

    return new PartialScopeImpl(refs, null, null, null).init({
      self
    });
  }

  static sized(size = 0) {
    let refs = new Array(size + 1);

    for (let i = 0; i <= size; i++) {
      refs[i] = UNDEFINED_REFERENCE;
    }

    return new PartialScopeImpl(refs, null, null, null);
  }

  init({
    self
  }) {
    this.slots[0] = self;
    return this;
  }

  getSelf() {
    return this.get(0);
  }

  getSymbol(symbol) {
    return this.get(symbol);
  }

  getBlock(symbol) {
    let block = this.get(symbol);
    return block === UNDEFINED_REFERENCE ? null : block;
  }

  getEvalScope() {
    return this.evalScope;
  }

  getPartialMap() {
    return this.partialMap;
  }

  bind(symbol, value) {
    this.set(symbol, value);
  }

  bindSelf(self) {
    this.set(0, self);
  }

  bindSymbol(symbol, value) {
    this.set(symbol, value);
  }

  bindBlock(symbol, value) {
    this.set(symbol, value);
  }

  bindEvalScope(map) {
    this.evalScope = map;
  }

  bindPartialMap(map) {
    this.partialMap = map;
  }

  bindCallerScope(scope) {
    this.callerScope = scope;
  }

  getCallerScope() {
    return this.callerScope;
  }

  child() {
    return new PartialScopeImpl(this.slots.slice(), this.callerScope, this.evalScope, this.partialMap);
  }

  get(index) {
    if (index >= this.slots.length) {
      throw new RangeError(`BUG: cannot get $${index} from scope; length=${this.slots.length}`);
    }

    return this.slots[index];
  }

  set(index, value) {
    if (index >= this.slots.length) {
      throw new RangeError(`BUG: cannot get $${index} from scope; length=${this.slots.length}`);
    }

    this.slots[index] = value;
  }

}

class AppendOpcodes {
  constructor() {
    this.evaluateOpcode = fillNulls(104
    /* Size */
    ).slice();
  }

  add(name, evaluate, kind = 'syscall') {
    this.evaluateOpcode[name] = {
      syscall: kind !== 'machine',
      evaluate
    };
  }

  debugBefore(vm, opcode) {
    let params = undefined;
    let opName = undefined;

    let sp;

    return {
      sp: sp,
      pc: vm.fetchValue($pc),
      name: opName,
      params,
      type: opcode.type,
      isMachine: opcode.isMachine,
      size: opcode.size,
      state: undefined
    };
  }

  debugAfter(vm, pre) {
  }

  evaluate(vm, opcode, type) {
    let operation = this.evaluateOpcode[type];

    if (operation.syscall) {
      operation.evaluate(vm, opcode);
    } else {
      operation.evaluate(vm[INNER_VM], opcode);
    }
  }

}
const APPEND_OPCODES = new AppendOpcodes();
class AbstractOpcode {
  constructor() {
    initializeGuid(this);
  }

}
class UpdatingOpcode extends AbstractOpcode {}

function createConcatRef(partsRefs) {
  return createComputeRef(() => {
    let parts = new Array();

    for (let i = 0; i < partsRefs.length; i++) {
      let value = valueForRef(partsRefs[i]);

      if (value !== null && value !== undefined) {
        parts[i] = castToString(value);
      }
    }

    if (parts.length > 0) {
      return parts.join('');
    }

    return null;
  });
}

function castToString(value) {
  if (typeof value.toString !== 'function') {
    return '';
  }

  return String(value);
}

APPEND_OPCODES.add(16
/* Helper */
, (vm, {
  op1: handle
}) => {
  let stack = vm.stack;
  let helper = vm.runtime.resolver.resolve(handle);
  let args = stack.popJs();
  let value = helper(args, vm);
  vm.loadValue($v0, value);
});
APPEND_OPCODES.add(21
/* GetVariable */
, (vm, {
  op1: symbol
}) => {
  let expr = vm.referenceForSymbol(symbol);
  vm.stack.pushJs(expr);
});
APPEND_OPCODES.add(19
/* SetVariable */
, (vm, {
  op1: symbol
}) => {
  let expr = vm.stack.pop();
  vm.scope().bindSymbol(symbol, expr);
});
APPEND_OPCODES.add(20
/* SetBlock */
, (vm, {
  op1: symbol
}) => {
  let handle = vm.stack.popJs();
  let scope = vm.stack.popJs();
  let table = vm.stack.popJs();
  let block = table ? [handle, scope, table] : null;
  vm.scope().bindBlock(symbol, block);
});
APPEND_OPCODES.add(102
/* ResolveMaybeLocal */
, (vm, {
  op1: _name
}) => {
  let name = vm[CONSTANTS].getValue(_name);
  let locals = vm.scope().getPartialMap();
  let ref = locals[name];

  if (ref === undefined) {
    ref = childRefFor(vm.getSelf(), name);
  }

  vm.stack.pushJs(ref);
});
APPEND_OPCODES.add(36
/* RootScope */
, (vm, {
  op1: symbols
}) => {
  vm.pushRootScope(symbols);
});
APPEND_OPCODES.add(22
/* GetProperty */
, (vm, {
  op1: _key
}) => {
  let key = vm[CONSTANTS].getValue(_key);
  let expr = vm.stack.popJs();
  vm.stack.pushJs(childRefFor(expr, key));
});
APPEND_OPCODES.add(23
/* GetBlock */
, (vm, {
  op1: _block
}) => {
  let {
    stack
  } = vm;
  let block = vm.scope().getBlock(_block);

  if (block === null) {
    stack.pushNull();
  } else {
    stack.pushJs(block);
  }
});
APPEND_OPCODES.add(24
/* SpreadBlock */
, vm => {
  let {
    stack
  } = vm;
  let block = stack.popJs();

  if (block && !isUndefinedReference(block)) {
    let [handleOrCompilable, scope, table] = block;
    stack.pushJs(table);
    stack.pushJs(scope);

    if (typeof handleOrCompilable === 'number') {
      stack.pushSmallInt(handleOrCompilable);
    } else {
      stack.pushJs(handleOrCompilable);
    }
  } else {
    stack.pushNull();
    stack.pushNull();
    stack.pushNull();
  }
});

function isUndefinedReference(input) {
  return input === UNDEFINED_REFERENCE;
}

APPEND_OPCODES.add(25
/* HasBlock */
, vm => {
  let {
    stack
  } = vm;
  let block = stack.pop();

  if (block && !isUndefinedReference(block)) {
    stack.pushJs(TRUE_REFERENCE);
  } else {
    stack.pushJs(FALSE_REFERENCE);
  }
});
APPEND_OPCODES.add(26
/* HasBlockParams */
, vm => {
  // FIXME(mmun): should only need to push the symbol table
  let block = vm.stack.pop();
  let scope = vm.stack.popJs();
  let table = vm.stack.popJs();
  let hasBlockParams = table && table.parameters.length;
  vm.stack.pushJs(hasBlockParams ? TRUE_REFERENCE : FALSE_REFERENCE);
});
APPEND_OPCODES.add(27
/* Concat */
, (vm, {
  op1: count
}) => {
  let out = new Array(count);

  for (let i = count; i > 0; i--) {
    let offset = i - 1;
    out[offset] = vm.stack.pop();
  }

  vm.stack.pushJs(createConcatRef(out));
});

/**
 * Converts a ComponentCapabilities object into a 32-bit integer representation.
 */
function capabilityFlagsFrom(capabilities) {
  return 0 | (capabilities.dynamicLayout ? 1
  /* DynamicLayout */
  : 0) | (capabilities.dynamicTag ? 2
  /* DynamicTag */
  : 0) | (capabilities.prepareArgs ? 4
  /* PrepareArgs */
  : 0) | (capabilities.createArgs ? 8
  /* CreateArgs */
  : 0) | (capabilities.attributeHook ? 16
  /* AttributeHook */
  : 0) | (capabilities.elementHook ? 32
  /* ElementHook */
  : 0) | (capabilities.dynamicScope ? 64
  /* DynamicScope */
  : 0) | (capabilities.createCaller ? 128
  /* CreateCaller */
  : 0) | (capabilities.updateHook ? 256
  /* UpdateHook */
  : 0) | (capabilities.createInstance ? 512
  /* CreateInstance */
  : 0) | (capabilities.wrapped ? 1024
  /* Wrapped */
  : 0) | (capabilities.willDestroy ? 2048
  /* WillDestroy */
  : 0);
}
function managerHasCapability(_manager, capabilities, capability) {
  return !!(capabilities & capability);
}
function hasCapability(capabilities, capability) {
  return !!(capabilities & capability);
}

const INNER = symbol('INNER');
const ARGS$1 = symbol('ARGS');
const CURRIED_COMPONENT_DEFINITIONS = new _WeakSet();
function isCurriedComponentDefinition(definition) {
  return CURRIED_COMPONENT_DEFINITIONS.has(definition);
}
class CurriedComponentDefinition {
  /** @internal */
  constructor(inner, args) {
    CURRIED_COMPONENT_DEFINITIONS.add(this);
    this[INNER] = inner;
    this[ARGS$1] = args;
  }

}

function offset(definition) {
  let inner = definition[INNER];
  let args = definition[ARGS$1];
  let length = args ? args.positional.length : 0;
  return isCurriedComponentDefinition(inner) ? length + offset(inner) : length;
}

function unwrapCurriedComponentDefinition(_definition, args) {
  let definition = _definition;
  args.realloc(offset(definition));

  while (true) {
    let {
      [ARGS$1]: curriedArgs,
      [INNER]: inner
    } = definition;

    if (curriedArgs) {
      args.positional.prepend(curriedArgs.positional);
      args.named.merge(curriedArgs.named);
    }

    if (!isCurriedComponentDefinition(inner)) {
      return inner;
    }

    definition = inner;
  }
}

function resolveCurriedComponentDefinition(instance, definition, args) {
  let unwrappedDefinition = instance.definition = unwrapCurriedComponentDefinition(definition, args);
  let {
    manager,
    state
  } = unwrappedDefinition;
  instance.manager = manager;
  instance.capabilities = capabilityFlagsFrom(manager.getCapabilities(state));
  return unwrappedDefinition;
}

function resolveComponent(resolver, name, meta) {
  let definition = resolver.lookupComponent(name, meta);
  return definition;
}

/** @internal */

function hasStaticLayout(capabilities, _manager) {
  return !hasCapability(capabilities, 1
  /* DynamicLayout */
  );
}

function createClassListRef(list) {
  return createComputeRef(() => {
    let ret = [];

    for (let i = 0; i < list.length; i++) {
      let ref = list[i];
      let value = normalizeStringValue(typeof ref === 'string' ? ref : valueForRef(list[i]));
      if (value) ret.push(value);
    }

    return ret.length === 0 ? null : ret.join(' ');
  });
}

function createCurryComponentRef(inner, resolver, meta, args) {
  let lastValue, lastDefinition;
  return createComputeRef(() => {
    let value = valueForRef(inner);

    if (value === lastValue) {
      return lastDefinition;
    }

    let definition = null;

    if (isCurriedComponentDefinition(value)) {
      definition = value;
    } else if (typeof value === 'string' && value) {
      definition = resolveComponent(resolver, value, meta);
    }

    definition = curry(definition, args);
    lastValue = value;
    lastDefinition = definition;
    return definition;
  });
}

function curry(definition, args) {
  if (!args && isCurriedComponentDefinition(definition)) {
    return definition;
  } else if (!definition) {
    return null;
  } else {
    return new CurriedComponentDefinition(definition, args);
  }
}

APPEND_OPCODES.add(38
/* ChildScope */
, vm => vm.pushChildScope());
APPEND_OPCODES.add(39
/* PopScope */
, vm => vm.popScope());
APPEND_OPCODES.add(58
/* PushDynamicScope */
, vm => vm.pushDynamicScope());
APPEND_OPCODES.add(59
/* PopDynamicScope */
, vm => vm.popDynamicScope());
APPEND_OPCODES.add(28
/* Constant */
, (vm, {
  op1: other
}) => {
  vm.stack.pushJs(vm[CONSTANTS].getValue(decodeHandle(other)));
});
APPEND_OPCODES.add(29
/* Primitive */
, (vm, {
  op1: primitive
}) => {
  let stack = vm.stack;

  if (isNonPrimitiveHandle(primitive)) {
    // it is a handle which does not already exist on the stack
    let value = vm[CONSTANTS].getValue(decodeHandle(primitive));
    stack.pushJs(value);
  } else {
    // is already an encoded immediate or primitive handle
    stack.pushRaw(primitive);
  }
});
APPEND_OPCODES.add(30
/* PrimitiveReference */
, vm => {
  let stack = vm.stack;
  let value = stack.pop();
  let ref;

  if (value === undefined) {
    ref = UNDEFINED_REFERENCE;
  } else if (value === null) {
    ref = NULL_REFERENCE;
  } else if (value === true) {
    ref = TRUE_REFERENCE;
  } else if (value === false) {
    ref = FALSE_REFERENCE;
  } else {
    ref = createPrimitiveRef(value);
  }

  stack.pushJs(ref);
});
APPEND_OPCODES.add(32
/* Dup */
, (vm, {
  op1: register,
  op2: offset
}) => {
  let position = vm.fetchValue(register) - offset;
  vm.stack.dup(position);
});
APPEND_OPCODES.add(33
/* Pop */
, (vm, {
  op1: count
}) => {
  vm.stack.pop(count);
});
APPEND_OPCODES.add(34
/* Load */
, (vm, {
  op1: register
}) => {
  vm.load(register);
});
APPEND_OPCODES.add(35
/* Fetch */
, (vm, {
  op1: register
}) => {
  vm.fetch(register);
});
APPEND_OPCODES.add(57
/* BindDynamicScope */
, (vm, {
  op1: _names
}) => {
  let names = vm[CONSTANTS].getArray(_names);
  vm.bindDynamicScope(names);
});
APPEND_OPCODES.add(68
/* Enter */
, (vm, {
  op1: args
}) => {
  vm.enter(args);
});
APPEND_OPCODES.add(69
/* Exit */
, vm => {
  vm.exit();
});
APPEND_OPCODES.add(62
/* PushSymbolTable */
, (vm, {
  op1: _table
}) => {
  let stack = vm.stack;
  stack.pushJs(vm[CONSTANTS].getSerializable(_table));
});
APPEND_OPCODES.add(61
/* PushBlockScope */
, vm => {
  let stack = vm.stack;
  stack.pushJs(vm.scope());
});
APPEND_OPCODES.add(60
/* CompileBlock */
, vm => {
  let stack = vm.stack;
  let block = stack.pop();

  if (block) {
    stack.pushSmallInt(vm.compile(block));
  } else {
    stack.pushNull();
  }
});
APPEND_OPCODES.add(63
/* InvokeYield */
, vm => {
  let {
    stack
  } = vm;
  let handle = stack.pop();
  let scope = stack.popJs();
  let table = stack.popJs();
  let args = stack.pop();

  if (table === null) {
    // To balance the pop{Frame,Scope}
    vm.pushFrame();
    vm.pushScope(scope); // Could be null but it doesnt matter as it is immediatelly popped.

    return;
  }

  let invokingScope = scope; // If necessary, create a child scope

  {
    let locals = table.parameters;
    let localsCount = locals.length;

    if (localsCount > 0) {
      invokingScope = invokingScope.child();

      for (let i = 0; i < localsCount; i++) {
        invokingScope.bindSymbol(locals[i], args.at(i));
      }
    }
  }
  vm.pushFrame();
  vm.pushScope(invokingScope);
  vm.call(handle);
});
APPEND_OPCODES.add(64
/* JumpIf */
, (vm, {
  op1: target
}) => {
  let reference = vm.stack.popJs();
  let value = Boolean(valueForRef(reference));

  if (isConstRef(reference)) {
    if (value === true) {
      vm.goto(target);
    }
  } else {
    if (value === true) {
      vm.goto(target);
    }

    vm.updateWith(new Assert(reference));
  }
});
APPEND_OPCODES.add(65
/* JumpUnless */
, (vm, {
  op1: target
}) => {
  let reference = vm.stack.popJs();
  let value = Boolean(valueForRef(reference));

  if (isConstRef(reference)) {
    if (value === false) {
      vm.goto(target);
    }
  } else {
    if (value === false) {
      vm.goto(target);
    }

    vm.updateWith(new Assert(reference));
  }
});
APPEND_OPCODES.add(66
/* JumpEq */
, (vm, {
  op1: target,
  op2: comparison
}) => {
  let other = vm.stack.peekSmallInt();

  if (other === comparison) {
    vm.goto(target);
  }
});
APPEND_OPCODES.add(67
/* AssertSame */
, vm => {
  let reference = vm.stack.peekJs();

  if (isConstRef(reference) === false) {
    vm.updateWith(new Assert(reference));
  }
});
APPEND_OPCODES.add(70
/* ToBoolean */
, vm => {
  let {
    stack
  } = vm;
  let valueRef = stack.popJs();
  stack.pushJs(createComputeRef(() => toBool(valueForRef(valueRef))));
});
class Assert extends UpdatingOpcode {
  constructor(ref) {
    super();
    this.ref = ref;
    this.type = 'assert';
    this.last = valueForRef(ref);
  }

  evaluate(vm) {
    let {
      last,
      ref
    } = this;
    let current = valueForRef(ref);

    if (last !== current) {
      vm.throw();
    }
  }

}
class AssertFilter extends UpdatingOpcode {
  constructor(ref, filter) {
    super();
    this.ref = ref;
    this.filter = filter;
    this.type = 'assert-filter';
    this.last = filter(valueForRef(ref));
  }

  evaluate(vm) {
    let {
      last,
      ref,
      filter
    } = this;
    let current = filter(valueForRef(ref));

    if (last !== current) {
      vm.throw();
    }
  }

}
class JumpIfNotModifiedOpcode extends UpdatingOpcode {
  constructor() {
    super(...arguments);
    this.type = 'jump-if-not-modified';
    this.tag = CONSTANT_TAG;
    this.lastRevision = INITIAL;
  }

  finalize(tag, target) {
    this.target = target;
    this.didModify(tag);
  }

  evaluate(vm) {
    let {
      tag,
      target,
      lastRevision
    } = this;

    if (!vm.alwaysRevalidate && validateTag(tag, lastRevision)) {
      consumeTag(tag);
      vm.goto(target);
    }
  }

  didModify(tag) {
    this.tag = tag;
    this.lastRevision = valueForTag(this.tag);
    consumeTag(tag);
  }

}
class BeginTrackFrameOpcode extends UpdatingOpcode {
  constructor(debugLabel) {
    super();
    this.debugLabel = debugLabel;
    this.type = 'begin-track-frame';
  }

  evaluate() {
    beginTrackFrame(this.debugLabel);
  }

}
class EndTrackFrameOpcode extends UpdatingOpcode {
  constructor(target) {
    super();
    this.target = target;
    this.type = 'end-track-frame';
  }

  evaluate() {
    let tag = endTrackFrame();
    this.target.didModify(tag);
  }

}

APPEND_OPCODES.add(40
/* Text */
, (vm, {
  op1: text
}) => {
  vm.elements().appendText(vm[CONSTANTS].getValue(text));
});
APPEND_OPCODES.add(41
/* Comment */
, (vm, {
  op1: text
}) => {
  vm.elements().appendComment(vm[CONSTANTS].getValue(text));
});
APPEND_OPCODES.add(47
/* OpenElement */
, (vm, {
  op1: tag
}) => {
  vm.elements().openElement(vm[CONSTANTS].getValue(tag));
});
APPEND_OPCODES.add(48
/* OpenDynamicElement */
, vm => {
  let tagName = valueForRef(vm.stack.popJs());
  vm.elements().openElement(tagName);
});
APPEND_OPCODES.add(49
/* PushRemoteElement */
, vm => {
  let elementRef = vm.stack.popJs();
  let insertBeforeRef = vm.stack.popJs();
  let guidRef = vm.stack.popJs();
  let element = valueForRef(elementRef);
  let insertBefore = valueForRef(insertBeforeRef);
  let guid = valueForRef(guidRef);

  if (!isConstRef(elementRef)) {
    vm.updateWith(new Assert(elementRef));
  }

  if (insertBefore !== undefined && !isConstRef(insertBeforeRef)) {
    vm.updateWith(new Assert(insertBeforeRef));
  }

  let block = vm.elements().pushRemoteElement(element, guid, insertBefore);
  if (block) vm.associateDestroyable(block);
});
APPEND_OPCODES.add(55
/* PopRemoteElement */
, vm => {
  vm.elements().popRemoteElement();
});
APPEND_OPCODES.add(53
/* FlushElement */
, vm => {
  let operations = vm.fetchValue($t0);
  let modifiers = null;

  if (operations) {
    modifiers = operations.flush(vm);
    vm.loadValue($t0, null);
  }

  vm.elements().flushElement(modifiers);
});
APPEND_OPCODES.add(54
/* CloseElement */
, vm => {
  let modifiers = vm.elements().closeElement();

  if (modifiers) {
    modifiers.forEach(([manager, modifier]) => {
      vm.env.scheduleInstallModifier(modifier, manager);
      let d = manager.getDestroyable(modifier);

      if (d) {
        vm.associateDestroyable(d);
      }
    });
  }
});
APPEND_OPCODES.add(56
/* Modifier */
, (vm, {
  op1: handle
}) => {
  let {
    manager,
    state
  } = vm.runtime.resolver.resolve(handle);
  let stack = vm.stack;
  let args = stack.popJs();
  let {
    constructing,
    updateOperations
  } = vm.elements();
  let dynamicScope = vm.dynamicScope();
  let modifier = manager.create(constructing, state, args, dynamicScope, updateOperations);
  let operations = vm.fetchValue($t0);
  operations.addModifier(manager, modifier);
  let tag = manager.getTag(modifier);

  if (tag !== null) {
    consumeTag(tag);
    vm.updateWith(new UpdateModifierOpcode(tag, manager, modifier));
  }
});
class UpdateModifierOpcode extends UpdatingOpcode {
  constructor(tag, manager, modifier) {
    super();
    this.tag = tag;
    this.manager = manager;
    this.modifier = modifier;
    this.type = 'update-modifier';
    this.lastUpdated = valueForTag(tag);
  }

  evaluate(vm) {
    let {
      manager,
      modifier,
      tag,
      lastUpdated
    } = this;
    consumeTag(tag);

    if (!validateTag(tag, lastUpdated)) {
      vm.env.scheduleUpdateModifier(modifier, manager);
      this.lastUpdated = valueForTag(tag);
    }
  }

}
APPEND_OPCODES.add(50
/* StaticAttr */
, (vm, {
  op1: _name,
  op2: _value,
  op3: _namespace
}) => {
  let name = vm[CONSTANTS].getValue(_name);
  let value = vm[CONSTANTS].getValue(_value);
  let namespace = _namespace ? vm[CONSTANTS].getValue(_namespace) : null;
  vm.elements().setStaticAttribute(name, value, namespace);
});
APPEND_OPCODES.add(51
/* DynamicAttr */
, (vm, {
  op1: _name,
  op2: trusting,
  op3: _namespace
}) => {
  let name = vm[CONSTANTS].getValue(_name);
  let reference = vm.stack.popJs();
  let value = valueForRef(reference);
  let namespace = _namespace ? vm[CONSTANTS].getValue(_namespace) : null;
  let attribute = vm.elements().setDynamicAttribute(name, value, !!trusting, namespace);

  if (!isConstRef(reference)) {
    vm.updateWith(new UpdateDynamicAttributeOpcode(reference, attribute));
  }
});
class UpdateDynamicAttributeOpcode extends UpdatingOpcode {
  constructor(reference, attribute) {
    super();
    this.reference = reference;
    this.attribute = attribute;
    this.type = 'patch-element';
    this.lastValue = valueForRef(reference);
  }

  evaluate(vm) {
    let {
      attribute,
      reference,
      lastValue
    } = this;
    let currentValue = valueForRef(reference);

    if (currentValue !== lastValue) {
      attribute.update(currentValue, vm.env);
      this.lastValue = currentValue;
    }
  }

}

/**
 * The VM creates a new ComponentInstance data structure for every component
 * invocation it encounters.
 *
 * Similar to how a ComponentDefinition contains state about all components of a
 * particular type, a ComponentInstance contains state specific to a particular
 * instance of a component type. It also contains a pointer back to its
 * component type's ComponentDefinition.
 */

const COMPONENT_INSTANCE = symbol('COMPONENT_INSTANCE');
APPEND_OPCODES.add(76
/* CurryComponent */
, (vm, {
  op1: _meta
}) => {
  let stack = vm.stack;
  let definition = stack.popJs();
  let capturedArgs = stack.popJs();
  let meta = vm[CONSTANTS].getValue(decodeHandle(_meta));
  let resolver = vm.runtime.resolver;
  vm.loadValue($v0, createCurryComponentRef(definition, resolver, meta, capturedArgs));
});
APPEND_OPCODES.add(77
/* PushComponentDefinition */
, (vm, {
  op1: handle
}) => {
  let definition = vm.runtime.resolver.resolve(handle);
  let {
    manager
  } = definition;
  let capabilities = capabilityFlagsFrom(manager.getCapabilities(definition.state));
  let instance = {
    [COMPONENT_INSTANCE]: true,
    definition,
    manager,
    capabilities,
    state: null,
    handle: null,
    table: null,
    lookup: null
  };
  vm.stack.pushJs(instance);
});
APPEND_OPCODES.add(80
/* ResolveDynamicComponent */
, (vm, {
  op1: _meta
}) => {
  let stack = vm.stack;
  let component = valueForRef(stack.popJs());
  let meta = vm[CONSTANTS].getValue(_meta);
  vm.loadValue($t1, null); // Clear the temp register

  let definition;

  if (typeof component === 'string') {
    let resolvedDefinition = resolveComponent(vm.runtime.resolver, component, meta);
    definition = resolvedDefinition;
  } else {
    definition = component;
  }

  stack.pushJs(definition);
});
APPEND_OPCODES.add(81
/* ResolveCurriedComponent */
, vm => {
  let stack = vm.stack;
  let ref = stack.popJs();
  let value = valueForRef(ref);

  let definition = value;
  vm.loadValue($t1, null); // Clear the temp register

  stack.pushJs(definition);
});
APPEND_OPCODES.add(78
/* PushDynamicComponentInstance */
, vm => {
  let {
    stack
  } = vm;
  let definition = stack.pop();
  let capabilities, manager;

  if (isCurriedComponentDefinition(definition)) {
    manager = capabilities = null;
  } else {
    manager = definition.manager;
    capabilities = capabilityFlagsFrom(manager.getCapabilities(definition.state));
  }

  stack.pushJs({
    definition,
    capabilities,
    manager,
    state: null,
    handle: null,
    table: null
  });
});
APPEND_OPCODES.add(79
/* PushCurriedComponent */
, vm => {
  let stack = vm.stack;
  let component = valueForRef(stack.popJs());
  let definition;

  if (isCurriedComponentDefinition(component)) {
    definition = component;
  } else {
    throw unreachable();
  }

  stack.pushJs(definition);
});
APPEND_OPCODES.add(82
/* PushArgs */
, (vm, {
  op1: _names,
  op2: _blockNames,
  op3: flags
}) => {
  let stack = vm.stack;
  let names = vm[CONSTANTS].getArray(_names);
  let positionalCount = flags >> 4;
  let atNames = flags & 0b1000;
  let blockNames = flags & 0b0111 ? vm[CONSTANTS].getArray(_blockNames) : EMPTY_ARRAY;
  vm[ARGS].setup(stack, names, blockNames, positionalCount, !!atNames);
  stack.pushJs(vm[ARGS]);
});
APPEND_OPCODES.add(83
/* PushEmptyArgs */
, vm => {
  let {
    stack
  } = vm;
  stack.pushJs(vm[ARGS].empty(stack));
});
APPEND_OPCODES.add(86
/* CaptureArgs */
, vm => {
  let stack = vm.stack;
  let args = stack.popJs();
  let capturedArgs = args.capture();
  stack.pushJs(capturedArgs);
});
APPEND_OPCODES.add(85
/* PrepareArgs */
, (vm, {
  op1: _state
}) => {
  let stack = vm.stack;
  let instance = vm.fetchValue(_state);
  let args = stack.popJs();
  let {
    definition
  } = instance;

  if (isCurriedComponentDefinition(definition)) {
    definition = resolveCurriedComponentDefinition(instance, definition, args);
  }

  let {
    manager,
    state
  } = definition;
  let capabilities = instance.capabilities;

  if (!managerHasCapability(manager, capabilities, 4
  /* PrepareArgs */
  )) {
    stack.pushJs(args);
    return;
  }

  let blocks = args.blocks.values;
  let blockNames = args.blocks.names;
  let preparedArgs = manager.prepareArgs(state, args);

  if (preparedArgs) {
    args.clear();

    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];

      if (typeof block === 'number') {
        stack.pushSmallInt(block);
      } else {
        stack.pushJs(block);
      }
    }

    let {
      positional,
      named
    } = preparedArgs;
    let positionalCount = positional.length;

    for (let i = 0; i < positionalCount; i++) {
      stack.pushJs(positional[i]);
    }

    let names = Object.keys(named);

    for (let i = 0; i < names.length; i++) {
      stack.pushJs(named[names[i]]);
    }

    args.setup(stack, names, blockNames, positionalCount, false);
  }

  stack.pushJs(args);
});
APPEND_OPCODES.add(87
/* CreateComponent */
, (vm, {
  op1: flags,
  op2: _state
}) => {
  let instance = vm.fetchValue(_state);
  let {
    definition,
    manager
  } = instance;
  let capabilities = instance.capabilities = capabilityFlagsFrom(manager.getCapabilities(definition.state));

  if (!managerHasCapability(manager, capabilities, 512
  /* CreateInstance */
  )) {
    // TODO: Closure and Main components are always invoked dynamically, so this
    // opcode may run even if this capability is not enabled. In the future we
    // should handle this in a better way.
    return;
  }

  let dynamicScope = null;

  if (managerHasCapability(manager, capabilities, 64
  /* DynamicScope */
  )) {
    dynamicScope = vm.dynamicScope();
  }

  let hasDefaultBlock = flags & 1;
  let args = null;

  if (managerHasCapability(manager, capabilities, 8
  /* CreateArgs */
  )) {
    args = vm.stack.peekJs();
  }

  let self = null;

  if (managerHasCapability(manager, capabilities, 128
  /* CreateCaller */
  )) {
    self = vm.getSelf();
  }

  let state = manager.create(vm.env, definition.state, args, dynamicScope, self, !!hasDefaultBlock); // We want to reuse the `state` POJO here, because we know that the opcodes
  // only transition at exactly one place.

  instance.state = state;

  if (managerHasCapability(manager, capabilities, 256
  /* UpdateHook */
  )) {
    vm.updateWith(new UpdateComponentOpcode(state, manager, dynamicScope));
  }
});
APPEND_OPCODES.add(88
/* RegisterComponentDestructor */
, (vm, {
  op1: _state
}) => {
  let {
    manager,
    state,
    capabilities
  } = vm.fetchValue(_state);
  let d = manager.getDestroyable(state);

  if (d) vm.associateDestroyable(d);
});
APPEND_OPCODES.add(97
/* BeginComponentTransaction */
, (vm, {
  op1: _state
}) => {
  let name;

  vm.beginCacheGroup(name);
  vm.elements().pushSimpleBlock();
});
APPEND_OPCODES.add(89
/* PutComponentOperations */
, vm => {
  vm.loadValue($t0, new ComponentElementOperations());
});
APPEND_OPCODES.add(52
/* ComponentAttr */
, (vm, {
  op1: _name,
  op2: trusting,
  op3: _namespace
}) => {
  let name = vm[CONSTANTS].getValue(_name);
  let reference = vm.stack.popJs();
  let namespace = _namespace ? vm[CONSTANTS].getValue(_namespace) : null;
  vm.fetchValue($t0).setAttribute(name, reference, !!trusting, namespace);
});
APPEND_OPCODES.add(105
/* StaticComponentAttr */
, (vm, {
  op1: _name,
  op2: _value,
  op3: _namespace
}) => {
  let name = vm[CONSTANTS].getValue(_name);
  let value = vm[CONSTANTS].getValue(_value);
  let namespace = _namespace ? vm[CONSTANTS].getValue(_namespace) : null;
  vm.fetchValue($t0).setStaticAttribute(name, value, namespace);
});
class ComponentElementOperations {
  constructor() {
    this.attributes = dict();
    this.classes = [];
    this.modifiers = [];
  }

  setAttribute(name, value, trusting, namespace) {
    let deferred = {
      value,
      namespace,
      trusting
    };

    if (name === 'class') {
      this.classes.push(value);
    }

    this.attributes[name] = deferred;
  }

  setStaticAttribute(name, value, namespace) {
    let deferred = {
      value,
      namespace
    };

    if (name === 'class') {
      this.classes.push(value);
    }

    this.attributes[name] = deferred;
  }

  addModifier(manager, state) {
    this.modifiers.push([manager, state]);
  }

  flush(vm) {
    let type;
    let attributes = this.attributes;

    for (let name in this.attributes) {
      if (name === 'type') {
        type = attributes[name];
        continue;
      }

      let attr = this.attributes[name];

      if (name === 'class') {
        setDeferredAttr(vm, 'class', mergeClasses(this.classes), attr.namespace, attr.trusting);
      } else {
        setDeferredAttr(vm, name, attr.value, attr.namespace, attr.trusting);
      }
    }

    if (type !== undefined) {
      setDeferredAttr(vm, 'type', type.value, type.namespace, type.trusting);
    }

    return this.modifiers;
  }

}

function mergeClasses(classes) {
  if (classes.length === 0) {
    return '';
  }

  if (classes.length === 1) {
    return classes[0];
  }

  if (allStringClasses(classes)) {
    return classes.join(' ');
  }

  return createClassListRef(classes);
}

function allStringClasses(classes) {
  for (let i = 0; i < classes.length; i++) {
    if (typeof classes[i] !== 'string') {
      return false;
    }
  }

  return true;
}

function setDeferredAttr(vm, name, value, namespace, trusting = false) {
  if (typeof value === 'string') {
    vm.elements().setStaticAttribute(name, value, namespace);
  } else {
    let attribute = vm.elements().setDynamicAttribute(name, valueForRef(value), trusting, namespace);

    if (!isConstRef(value)) {
      vm.updateWith(new UpdateDynamicAttributeOpcode(value, attribute));
    }
  }
}

APPEND_OPCODES.add(99
/* DidCreateElement */
, (vm, {
  op1: _state
}) => {
  let {
    definition,
    state
  } = vm.fetchValue(_state);
  let {
    manager
  } = definition;
  let operations = vm.fetchValue($t0);
  manager.didCreateElement(state, vm.elements().constructing, operations);
});
APPEND_OPCODES.add(90
/* GetComponentSelf */
, (vm, {
  op1: _state
}) => {
  let {
    definition,
    state
  } = vm.fetchValue(_state);
  let {
    manager
  } = definition;
  vm.stack.pushJs(manager.getSelf(state));
});
APPEND_OPCODES.add(91
/* GetComponentTagName */
, (vm, {
  op1: _state
}) => {
  let {
    definition,
    state
  } = vm.fetchValue(_state);
  let {
    manager
  } = definition;
  let tagName = manager.getTagName(state); // User provided value from JS, so we don't bother to encode

  vm.stack.pushJs(tagName);
}); // Dynamic Invocation Only

APPEND_OPCODES.add(92
/* GetComponentLayout */
, (vm, {
  op1: _state
}) => {
  let instance = vm.fetchValue(_state);
  let manager = instance.manager;
  let {
    definition
  } = instance;
  let {
    stack
  } = vm;
  let {
    capabilities
  } = instance;
  let layout;

  if (hasStaticLayout(capabilities)) {
    layout = manager.getStaticLayout(definition.state, vm.runtime.resolver);
  } else {
    let template = unwrapTemplate(manager.getDynamicLayout(instance.state, vm.runtime.resolver));

    if (hasCapability(capabilities, 1024
    /* Wrapped */
    )) {
      layout = template.asWrappedLayout();
    } else {
      layout = template.asLayout();
    }
  }

  let handle = layout.compile(vm.context);
  stack.pushJs(layout.symbolTable);

  {
    stack.pushSmallInt(handle);
  }
});
APPEND_OPCODES.add(74
/* Main */
, (vm, {
  op1: register
}) => {
  let definition = vm.stack.popJs();
  let invocation = vm.stack.popJs();
  let {
    manager
  } = definition;
  let capabilities = capabilityFlagsFrom(manager.getCapabilities(definition.state));
  let state = {
    [COMPONENT_INSTANCE]: true,
    definition,
    manager,
    capabilities,
    state: null,
    handle: invocation.handle,
    table: invocation.symbolTable,
    lookup: null
  };
  vm.loadValue(register, state);
});
APPEND_OPCODES.add(95
/* PopulateLayout */
, (vm, {
  op1: _state
}) => {
  let {
    stack
  } = vm; // In DEBUG handles could be ErrHandle objects

  let handle =  stack.popSmallInt();
  let table = stack.popJs();
  let state = vm.fetchValue(_state);
  state.handle = handle;
  state.table = table;
});
APPEND_OPCODES.add(37
/* VirtualRootScope */
, (vm, {
  op1: _state
}) => {
  let {
    symbols
  } = vm.fetchValue(_state).table;
  vm.pushRootScope(symbols.length + 1);
});
APPEND_OPCODES.add(94
/* SetupForEval */
, (vm, {
  op1: _state
}) => {
  let state = vm.fetchValue(_state);

  if (state.table.hasEval) {
    let lookup = state.lookup = dict();
    vm.scope().bindEvalScope(lookup);
  }
});
APPEND_OPCODES.add(17
/* SetNamedVariables */
, (vm, {
  op1: _state
}) => {
  let state = vm.fetchValue(_state);
  let scope = vm.scope();
  let args = vm.stack.peekJs();
  let callerNames = args.named.atNames;

  for (let i = callerNames.length - 1; i >= 0; i--) {
    let atName = callerNames[i];
    let symbol = state.table.symbols.indexOf(callerNames[i]);
    let value = args.named.get(atName, true);
    if (symbol !== -1) scope.bindSymbol(symbol + 1, value);
    if (state.lookup) state.lookup[atName] = value;
  }
});

function bindBlock(symbolName, blockName, state, blocks, vm) {
  let symbol = state.table.symbols.indexOf(symbolName);
  let block = blocks.get(blockName);
  if (symbol !== -1) vm.scope().bindBlock(symbol + 1, block);
  if (state.lookup) state.lookup[symbolName] = block;
}

APPEND_OPCODES.add(18
/* SetBlocks */
, (vm, {
  op1: _state
}) => {
  let state = vm.fetchValue(_state);
  let {
    blocks
  } = vm.stack.peekJs();

  for (let i = 0; i < blocks.names.length; i++) {
    bindBlock(blocks.symbolNames[i], blocks.names[i], state, blocks, vm);
  }
}); // Dynamic Invocation Only

APPEND_OPCODES.add(96
/* InvokeComponentLayout */
, (vm, {
  op1: _state
}) => {
  let state = vm.fetchValue(_state);
  vm.call(state.handle);
});
APPEND_OPCODES.add(100
/* DidRenderLayout */
, (vm, {
  op1: _state
}) => {
  let {
    manager,
    state,
    capabilities
  } = vm.fetchValue(_state);
  let bounds = vm.elements().popBlock();
  let mgr = manager;
  mgr.didRenderLayout(state, bounds);

  if (managerHasCapability(manager, capabilities, 512
  /* CreateInstance */
  )) {
    vm.env.didCreate(state, manager);
    vm.updateWith(new DidUpdateLayoutOpcode(manager, state, bounds));
  }
});
APPEND_OPCODES.add(98
/* CommitComponentTransaction */
, vm => {
  vm.commitCacheGroup();
});
class UpdateComponentOpcode extends UpdatingOpcode {
  constructor(component, manager, dynamicScope) {
    super();
    this.component = component;
    this.manager = manager;
    this.dynamicScope = dynamicScope;
    this.type = 'update-component';
  }

  evaluate(_vm) {
    let {
      component,
      manager,
      dynamicScope
    } = this;
    manager.update(component, dynamicScope);
  }

}
class DidUpdateLayoutOpcode extends UpdatingOpcode {
  constructor(manager, component, bounds) {
    super();
    this.manager = manager;
    this.component = component;
    this.bounds = bounds;
    this.type = 'did-update-layout';
  }

  evaluate(vm) {
    let {
      manager,
      component,
      bounds
    } = this;
    manager.didUpdateLayout(component, bounds);
    vm.env.didUpdate(component, manager);
  }

}

class DynamicTextContent extends UpdatingOpcode {
  constructor(node, reference, lastValue) {
    super();
    this.node = node;
    this.reference = reference;
    this.lastValue = lastValue;
    this.type = 'dynamic-text';
  }

  evaluate() {
    let value = valueForRef(this.reference);
    let {
      lastValue
    } = this;
    if (value === lastValue) return;
    let normalized;

    if (isEmpty(value)) {
      normalized = '';
    } else if (isString(value)) {
      normalized = value;
    } else {
      normalized = String(value);
    }

    if (normalized !== lastValue) {
      let textNode = this.node;
      textNode.nodeValue = this.lastValue = normalized;
    }
  }

}

function toContentType(value) {
  if (shouldCoerce(value)) {
    return 1
    /* String */
    ;
  } else if (isCurriedComponentDefinition(value)) {
    return 0
    /* Component */
    ;
  } else if (isSafeString(value)) {
    return 3
    /* SafeString */
    ;
  } else if (isFragment(value)) {
    return 4
    /* Fragment */
    ;
  } else if (isNode(value)) {
    return 5
    /* Node */
    ;
  } else {
      return 1
      /* String */
      ;
    }
}

APPEND_OPCODES.add(75
/* ContentType */
, vm => {
  let reference = vm.stack.peek();
  vm.stack.pushSmallInt(toContentType(valueForRef(reference)));

  if (!isConstRef(reference)) {
    vm.updateWith(new AssertFilter(reference, toContentType));
  }
});
APPEND_OPCODES.add(42
/* AppendHTML */
, vm => {
  let reference = vm.stack.popJs();
  let rawValue = valueForRef(reference);
  let value = isEmpty(rawValue) ? '' : String(rawValue);
  vm.elements().appendDynamicHTML(value);
});
APPEND_OPCODES.add(43
/* AppendSafeHTML */
, vm => {
  let reference = vm.stack.popJs();
  let rawValue = valueForRef(reference).toHTML();
  let value = isEmpty(rawValue) ? '' : rawValue;
  vm.elements().appendDynamicHTML(value);
});
APPEND_OPCODES.add(46
/* AppendText */
, vm => {
  let reference = vm.stack.popJs();
  let rawValue = valueForRef(reference);
  let value = isEmpty(rawValue) ? '' : String(rawValue);
  let node = vm.elements().appendDynamicText(value);

  if (!isConstRef(reference)) {
    vm.updateWith(new DynamicTextContent(node, reference, value));
  }
});
APPEND_OPCODES.add(44
/* AppendDocumentFragment */
, vm => {
  let reference = vm.stack.popJs();
  let value = valueForRef(reference);
  vm.elements().appendDynamicFragment(value);
});
APPEND_OPCODES.add(45
/* AppendNode */
, vm => {
  let reference = vm.stack.popJs();
  let value = valueForRef(reference);
  vm.elements().appendDynamicNode(value);
});

function debugCallback(context, get) {
  console.info('Use `context`, and `get(<path>)` to debug this template.'); // for example...
  // eslint-disable-next-line no-unused-expressions

  context === get('this'); // eslint-disable-next-line no-debugger

  debugger;
}

let callback = debugCallback; // For testing purposes

class ScopeInspector {
  constructor(scope, symbols, evalInfo) {
    this.scope = scope;
    this.locals = dict();

    for (let i = 0; i < evalInfo.length; i++) {
      let slot = evalInfo[i];
      let name = symbols[slot - 1];
      let ref = scope.getSymbol(slot);
      this.locals[name] = ref;
    }
  }

  get(path) {
    let {
      scope,
      locals
    } = this;
    let parts = path.split('.');
    let [head, ...tail] = path.split('.');
    let evalScope = scope.getEvalScope();
    let ref;

    if (head === 'this') {
      ref = scope.getSelf();
    } else if (locals[head]) {
      ref = locals[head];
    } else if (head.indexOf('@') === 0 && evalScope[head]) {
      ref = evalScope[head];
    } else {
      ref = this.scope.getSelf();
      tail = parts;
    }

    return tail.reduce((r, part) => childRefFor(r, part), ref);
  }

}

APPEND_OPCODES.add(103
/* Debugger */
, (vm, {
  op1: _symbols,
  op2: _evalInfo
}) => {
  let symbols = vm[CONSTANTS].getArray(_symbols);
  let evalInfo = vm[CONSTANTS].getValue(decodeHandle(_evalInfo));
  let inspector = new ScopeInspector(vm.scope(), symbols, evalInfo);
  callback(valueForRef(vm.getSelf()), path => valueForRef(inspector.get(path)));
});

APPEND_OPCODES.add(101
/* InvokePartial */
, (vm, {
  op1: _meta,
  op2: _symbols,
  op3: _evalInfo
}) => {
  let {
    [CONSTANTS]: constants,
    stack
  } = vm;
  let name = valueForRef(stack.pop());
  let meta = constants.getValue(decodeHandle(_meta));
  let outerSymbols = constants.getArray(_symbols);
  let evalInfo = constants.getValue(decodeHandle(_evalInfo));
  let handle = vm.runtime.resolver.lookupPartial(name, meta);
  let definition = vm.runtime.resolver.resolve(handle);
  let {
    symbolTable,
    handle: vmHandle
  } = definition.getPartial(vm.context);
  {
    let partialSymbols = symbolTable.symbols;
    let outerScope = vm.scope();
    let partialScope = vm.pushRootScope(partialSymbols.length);
    let evalScope = outerScope.getEvalScope();
    partialScope.bindEvalScope(evalScope);
    partialScope.bindSelf(outerScope.getSelf());
    let locals = Object.create(outerScope.getPartialMap());

    for (let i = 0; i < evalInfo.length; i++) {
      let slot = evalInfo[i];
      let name = outerSymbols[slot - 1];
      let ref = outerScope.getSymbol(slot);
      locals[name] = ref;
    }

    if (evalScope) {
      for (let i = 0; i < partialSymbols.length; i++) {
        let name = partialSymbols[i];
        let symbol = i + 1;
        let value = evalScope[name];
        if (value !== undefined) partialScope.bind(symbol, value);
      }
    }

    partialScope.bindPartialMap(locals);
    vm.pushFrame(); // sp += 2

    vm.call(unwrapHandle(vmHandle));
  }
});

APPEND_OPCODES.add(71
/* EnterList */
, (vm, {
  op1: relativeStart,
  op2: elseTarget
}) => {
  let stack = vm.stack;
  let listRef = stack.popJs();
  let keyRef = stack.popJs();
  let keyValue = valueForRef(keyRef);
  let key = keyValue === null ? '@identity' : String(keyValue);
  let iteratorRef = createIteratorRef(listRef, key);
  let iterator = valueForRef(iteratorRef);
  vm.updateWith(new AssertFilter(iteratorRef, iterator => iterator.isEmpty()));

  if (iterator.isEmpty() === true) {
    // TODO: Fix this offset, should be accurate
    vm.goto(elseTarget + 1);
  } else {
    vm.enterList(iteratorRef, relativeStart);
    vm.stack.pushJs(iterator);
  }
});
APPEND_OPCODES.add(72
/* ExitList */
, vm => {
  vm.exitList();
});
APPEND_OPCODES.add(73
/* Iterate */
, (vm, {
  op1: breaks
}) => {
  let stack = vm.stack;
  let iterator = stack.peekJs();
  let item = iterator.next();

  if (item !== null) {
    vm.registerItem(vm.enterItem(item));
  } else {
    vm.goto(breaks);
  }
});

const SVG_INTEGRATION_POINTS = {
  foreignObject: 1,
  desc: 1,
  title: 1
}; // http://www.w3.org/TR/html/syntax.html#adjust-svg-attributes
// TODO: Adjust SVG attributes
// http://www.w3.org/TR/html/syntax.html#parsing-main-inforeign
// TODO: Adjust SVG elements
// http://www.w3.org/TR/html/syntax.html#parsing-main-inforeign

const BLACKLIST_TABLE = Object.create(null);
class DOMOperations {
  constructor(document) {
    this.document = document;
    this.setupUselessElement();
  } // split into seperate method so that NodeDOMTreeConstruction
  // can override it.


  setupUselessElement() {
    this.uselessElement = this.document.createElement('div');
  }

  createElement(tag, context) {
    let isElementInSVGNamespace, isHTMLIntegrationPoint;

    if (context) {
      isElementInSVGNamespace = context.namespaceURI === "http://www.w3.org/2000/svg"
      /* SVG */
      || tag === 'svg';
      isHTMLIntegrationPoint = !!SVG_INTEGRATION_POINTS[context.tagName];
    } else {
      isElementInSVGNamespace = tag === 'svg';
      isHTMLIntegrationPoint = false;
    }

    if (isElementInSVGNamespace && !isHTMLIntegrationPoint) {
      // FIXME: This does not properly handle <font> with color, face, or
      // size attributes, which is also disallowed by the spec. We should fix
      // this.
      if (BLACKLIST_TABLE[tag]) {
        throw new Error(`Cannot create a ${tag} inside an SVG context`);
      }

      return this.document.createElementNS("http://www.w3.org/2000/svg"
      /* SVG */
      , tag);
    } else {
      return this.document.createElement(tag);
    }
  }

  insertBefore(parent, node, reference) {
    parent.insertBefore(node, reference);
  }

  insertHTMLBefore(parent, nextSibling, html) {
    if (html === '') {
      let comment = this.createComment('');
      parent.insertBefore(comment, nextSibling);
      return new ConcreteBounds(parent, comment, comment);
    }

    let prev = nextSibling ? nextSibling.previousSibling : parent.lastChild;
    let last;

    if (nextSibling === null) {
      parent.insertAdjacentHTML("beforeend"
      /* beforeend */
      , html);
      last = parent.lastChild;
    } else if (nextSibling instanceof HTMLElement) {
      nextSibling.insertAdjacentHTML('beforebegin', html);
      last = nextSibling.previousSibling;
    } else {
      // Non-element nodes do not support insertAdjacentHTML, so add an
      // element and call it on that element. Then remove the element.
      //
      // This also protects Edge, IE and Firefox w/o the inspector open
      // from merging adjacent text nodes. See ./compat/text-node-merging-fix.ts
      let {
        uselessElement
      } = this;
      parent.insertBefore(uselessElement, nextSibling);
      uselessElement.insertAdjacentHTML("beforebegin"
      /* beforebegin */
      , html);
      last = uselessElement.previousSibling;
      parent.removeChild(uselessElement);
    }

    let first = prev ? prev.nextSibling : parent.firstChild;
    return new ConcreteBounds(parent, first, last);
  }

  createTextNode(text) {
    return this.document.createTextNode(text);
  }

  createComment(data) {
    return this.document.createComment(data);
  }

}
function moveNodesBefore(source, target, nextSibling) {
  let first = source.firstChild;
  let last = first;
  let current = first;

  while (current) {
    let next = current.nextSibling;
    target.insertBefore(current, nextSibling);
    last = current;
    current = next;
  }

  return new ConcreteBounds(target, first, last);
}

const SVG_NAMESPACE = "http://www.w3.org/2000/svg"
/* SVG */
; // Patch:    insertAdjacentHTML on SVG Fix
// Browsers: Safari, IE, Edge, Firefox ~33-34
// Reason:   insertAdjacentHTML does not exist on SVG elements in Safari. It is
//           present but throws an exception on IE and Edge. Old versions of
//           Firefox create nodes in the incorrect namespace.
// Fix:      Since IE and Edge silently fail to create SVG nodes using
//           innerHTML, and because Firefox may create nodes in the incorrect
//           namespace using innerHTML on SVG elements, an HTML-string wrapping
//           approach is used. A pre/post SVG tag is added to the string, then
//           that whole string is added to a div. The created nodes are plucked
//           out and applied to the target location on DOM.

function applySVGInnerHTMLFix(document, DOMClass, svgNamespace) {
  if (!document) return DOMClass;

  if (!shouldApplyFix(document, svgNamespace)) {
    return DOMClass;
  }

  let div = document.createElement('div');
  return class DOMChangesWithSVGInnerHTMLFix extends DOMClass {
    insertHTMLBefore(parent, nextSibling, html) {
      if (html === '') {
        return super.insertHTMLBefore(parent, nextSibling, html);
      }

      if (parent.namespaceURI !== svgNamespace) {
        return super.insertHTMLBefore(parent, nextSibling, html);
      }

      return fixSVG(parent, div, html, nextSibling);
    }

  };
}

function fixSVG(parent, div, html, reference) {
  let source; // This is important, because decendants of the <foreignObject> integration
  // point are parsed in the HTML namespace

  if (parent.tagName.toUpperCase() === 'FOREIGNOBJECT') {
    // IE, Edge: also do not correctly support using `innerHTML` on SVG
    // namespaced elements. So here a wrapper is used.
    let wrappedHtml = '<svg><foreignObject>' + html + '</foreignObject></svg>';
    clearElement(div);
    div.insertAdjacentHTML("afterbegin"
    /* afterbegin */
    , wrappedHtml);
    source = div.firstChild.firstChild;
  } else {
    // IE, Edge: also do not correctly support using `innerHTML` on SVG
    // namespaced elements. So here a wrapper is used.
    let wrappedHtml = '<svg>' + html + '</svg>';
    clearElement(div);
    div.insertAdjacentHTML("afterbegin"
    /* afterbegin */
    , wrappedHtml);
    source = div.firstChild;
  }

  return moveNodesBefore(source, parent, reference);
}

function shouldApplyFix(document, svgNamespace) {
  let svg = document.createElementNS(svgNamespace, 'svg');

  try {
    svg.insertAdjacentHTML("beforeend"
    /* beforeend */
    , '<circle></circle>');
  } catch (e) {// IE, Edge: Will throw, insertAdjacentHTML is unsupported on SVG
    // Safari: Will throw, insertAdjacentHTML is not present on SVG
  } finally {
    // FF: Old versions will create a node in the wrong namespace
    if (svg.childNodes.length === 1 && svg.firstChild.namespaceURI === SVG_NAMESPACE) {
      // The test worked as expected, no fix required
      return false;
    }

    return true;
  }
}

// Patch:    Adjacent text node merging fix
// Browsers: IE, Edge, Firefox w/o inspector open
// Reason:   These browsers will merge adjacent text nodes. For exmaple given
//           <div>Hello</div> with div.insertAdjacentHTML(' world') browsers
//           with proper behavior will populate div.childNodes with two items.
//           These browsers will populate it with one merged node instead.
// Fix:      Add these nodes to a wrapper element, then iterate the childNodes
//           of that wrapper and move the nodes to their target location. Note
//           that potential SVG bugs will have been handled before this fix.
//           Note that this fix must only apply to the previous text node, as
//           the base implementation of `insertHTMLBefore` already handles
//           following text nodes correctly.
function applyTextNodeMergingFix(document, DOMClass) {
  if (!document) return DOMClass;

  if (!shouldApplyFix$1(document)) {
    return DOMClass;
  }

  return class DOMChangesWithTextNodeMergingFix extends DOMClass {
    constructor(document) {
      super(document);
      this.uselessComment = document.createComment('');
    }

    insertHTMLBefore(parent, nextSibling, html) {
      if (html === '') {
        return super.insertHTMLBefore(parent, nextSibling, html);
      }

      let didSetUselessComment = false;
      let nextPrevious = nextSibling ? nextSibling.previousSibling : parent.lastChild;

      if (nextPrevious && nextPrevious instanceof Text) {
        didSetUselessComment = true;
        parent.insertBefore(this.uselessComment, nextSibling);
      }

      let bounds = super.insertHTMLBefore(parent, nextSibling, html);

      if (didSetUselessComment) {
        parent.removeChild(this.uselessComment);
      }

      return bounds;
    }

  };
}

function shouldApplyFix$1(document) {
  let mergingTextDiv = document.createElement('div');
  mergingTextDiv.appendChild(document.createTextNode('first'));
  mergingTextDiv.insertAdjacentHTML("beforeend"
  /* beforeend */
  , 'second');

  if (mergingTextDiv.childNodes.length === 2) {
    // It worked as expected, no fix required
    return false;
  }

  return true;
}

['b', 'big', 'blockquote', 'body', 'br', 'center', 'code', 'dd', 'div', 'dl', 'dt', 'em', 'embed', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'hr', 'i', 'img', 'li', 'listing', 'main', 'meta', 'nobr', 'ol', 'p', 'pre', 'ruby', 's', 'small', 'span', 'strong', 'strike', 'sub', 'sup', 'table', 'tt', 'u', 'ul', 'var'].forEach(tag => BLACKLIST_TABLE[tag] = 1);
let doc = typeof document === 'undefined' ? null : document;
var DOM;

(function (DOM) {
  class TreeConstruction extends DOMOperations {
    createElementNS(namespace, tag) {
      return this.document.createElementNS(namespace, tag);
    }

    setAttribute(element, name, value, namespace = null) {
      if (namespace) {
        element.setAttributeNS(namespace, name, value);
      } else {
        element.setAttribute(name, value);
      }
    }

  }

  DOM.TreeConstruction = TreeConstruction;
  let appliedTreeContruction = TreeConstruction;
  appliedTreeContruction = applyTextNodeMergingFix(doc, appliedTreeContruction);
  appliedTreeContruction = applySVGInnerHTMLFix(doc, appliedTreeContruction, "http://www.w3.org/2000/svg"
  /* SVG */
  );
  DOM.DOMTreeConstruction = appliedTreeContruction;
})(DOM || (DOM = {}));

class DOMChangesImpl extends DOMOperations {
  constructor(document) {
    super(document);
    this.document = document;
    this.namespace = null;
  }

  setAttribute(element, name, value) {
    element.setAttribute(name, value);
  }

  removeAttribute(element, name) {
    element.removeAttribute(name);
  }

  insertAfter(element, node, reference) {
    this.insertBefore(element, node, reference.nextSibling);
  }

}
let helper = DOMChangesImpl;
helper = applyTextNodeMergingFix(doc, helper);
helper = applySVGInnerHTMLFix(doc, helper, "http://www.w3.org/2000/svg"
/* SVG */
);
const DOMTreeConstruction = DOM.DOMTreeConstruction;

const WELL_KNOWN_EMPTY_ARRAY = Object.freeze([]);
const STARTER_CONSTANTS = constants(WELL_KNOWN_EMPTY_ARRAY);
const WELL_KNOWN_EMPTY_ARRAY_POSITION = STARTER_CONSTANTS.indexOf(WELL_KNOWN_EMPTY_ARRAY);
class CompileTimeConstantImpl {
  constructor() {
    // `0` means NULL
    this.values = STARTER_CONSTANTS.slice();
    this.indexMap = new Map(this.values.map((value, index) => [value, index]));
  }

  value(value) {
    let indexMap = this.indexMap;
    let index = indexMap.get(value);

    if (index === undefined) {
      index = this.values.push(value) - 1;
      indexMap.set(value, index);
    }

    return index;
  }

  array(values) {
    if (values.length === 0) {
      return WELL_KNOWN_EMPTY_ARRAY_POSITION;
    }

    let handles = new Array(values.length);

    for (let i = 0; i < values.length; i++) {
      handles[i] = this.value(values[i]);
    }

    return this.value(handles);
  }

  serializable(value) {
    let str = JSON.stringify(value);
    return this.value(str);
  }

  toPool() {
    return this.values;
  }

}
class ConstantsImpl extends CompileTimeConstantImpl {
  constructor() {
    super(...arguments);
    this.reifiedArrs = {
      [WELL_KNOWN_EMPTY_ARRAY_POSITION]: WELL_KNOWN_EMPTY_ARRAY
    };
  }

  templateMeta(meta) {
    return this.value(meta);
  }

  getValue(index) {
    return this.values[index];
  }

  getArray(index) {
    let reifiedArrs = this.reifiedArrs;
    let reified = reifiedArrs[index];

    if (reified === undefined) {
      let names = this.getValue(index);
      reified = new Array(names.length);

      for (let i = 0; i < names.length; i++) {
        reified[i] = this.getValue(names[i]);
      }

      reifiedArrs[index] = reified;
    }

    return reified;
  }

  getSerializable(s) {
    return JSON.parse(this.getValue(s));
  }

}

class RuntimeOpImpl {
  constructor(heap) {
    this.heap = heap;
    this.offset = 0;
  }

  get size() {
    let rawType = this.heap.getbyaddr(this.offset);
    return ((rawType & 768
    /* OPERAND_LEN_MASK */
    ) >> 8
    /* ARG_SHIFT */
    ) + 1;
  }

  get isMachine() {
    let rawType = this.heap.getbyaddr(this.offset);
    return rawType & 1024
    /* MACHINE_MASK */
    ? 1 : 0;
  }

  get type() {
    return this.heap.getbyaddr(this.offset) & 255
    /* TYPE_MASK */
    ;
  }

  get op1() {
    return this.heap.getbyaddr(this.offset + 1);
  }

  get op2() {
    return this.heap.getbyaddr(this.offset + 2);
  }

  get op3() {
    return this.heap.getbyaddr(this.offset + 3);
  }

}

function encodeTableInfo(scopeSize, state) {
  return state | scopeSize << 2;
}

function changeState(info, newState) {
  return info | newState << 30;
}

const PAGE_SIZE = 0x100000;
/**
 * The Heap is responsible for dynamically allocating
 * memory in which we read/write the VM's instructions
 * from/to. When we malloc we pass out a VMHandle, which
 * is used as an indirect way of accessing the memory during
 * execution of the VM. Internally we track the different
 * regions of the memory in an int array known as the table.
 *
 * The table 32-bit aligned and has the following layout:
 *
 * | ... | hp (u32) |       info (u32)   | size (u32) |
 * | ... |  Handle  | Scope Size | State | Size       |
 * | ... | 32bits   | 30bits     | 2bits | 32bit      |
 *
 * With this information we effectively have the ability to
 * control when we want to free memory. That being said you
 * can not free during execution as raw address are only
 * valid during the execution. This means you cannot close
 * over them as you will have a bad memory access exception.
 */

class HeapImpl {
  constructor() {
    this.placeholders = [];
    this.stdlibs = [];
    this.offset = 0;
    this.handle = 0;
    this.capacity = PAGE_SIZE;
    this.heap = new Int32Array(PAGE_SIZE);
    this.table = [];
  }

  push(item) {
    this.sizeCheck();
    this.heap[this.offset++] = item;
  }

  sizeCheck() {
    if (this.capacity === 0) {
      let heap = slice(this.heap, 0, this.offset);
      this.heap = new Int32Array(heap.length + PAGE_SIZE);
      this.heap.set(heap, 0);
      this.capacity = PAGE_SIZE;
    }

    this.capacity--;
  }

  getbyaddr(address) {
    return this.heap[address];
  }

  setbyaddr(address, value) {
    this.heap[address] = value;
  }

  malloc() {
    // push offset, info, size
    this.table.push(this.offset, 0, 0);
    let handle = this.handle;
    this.handle += 3
    /* ENTRY_SIZE */
    ;
    return handle;
  }

  finishMalloc(handle, scopeSize) {

    this.table[handle + 1
    /* INFO_OFFSET */
    ] = encodeTableInfo(scopeSize, 0
    /* Allocated */
    );
  }

  size() {
    return this.offset;
  } // It is illegal to close over this address, as compaction
  // may move it. However, it is legal to use this address
  // multiple times between compactions.


  getaddr(handle) {
    return this.table[handle];
  }

  gethandle(address) {
    this.table.push(address, encodeTableInfo(0, 3
    /* Pointer */
    ), 0);
    let handle = this.handle;
    this.handle += 3
    /* ENTRY_SIZE */
    ;
    return handle;
  }

  sizeof(handle) {
    return sizeof(this.table);
  }

  scopesizeof(handle) {
    return scopesizeof(this.table, handle);
  }

  free(handle) {
    let info = this.table[handle + 1
    /* INFO_OFFSET */
    ];
    this.table[handle + 1
    /* INFO_OFFSET */
    ] = changeState(info, 1
    /* Freed */
    );
  }
  /**
   * The heap uses the [Mark-Compact Algorithm](https://en.wikipedia.org/wiki/Mark-compact_algorithm) to shift
   * reachable memory to the bottom of the heap and freeable
   * memory to the top of the heap. When we have shifted all
   * the reachable memory to the top of the heap, we move the
   * offset to the next free position.
   */


  compact() {
    let compactedSize = 0;
    let {
      table,
      table: {
        length
      },
      heap
    } = this;

    for (let i = 0; i < length; i += 3
    /* ENTRY_SIZE */
    ) {
      let offset = table[i];
      let info = table[i + 1
      /* INFO_OFFSET */
      ]; // @ts-ignore (this whole function is currently unused)

      let size = info & Size.SIZE_MASK;
      let state = info & 3
      /* STATE_MASK */
      >> 30;

      if (state === 2
      /* Purged */
      ) {
          continue;
        } else if (state === 1
      /* Freed */
      ) {
          // transition to "already freed" aka "purged"
          // a good improvement would be to reuse
          // these slots
          table[i + 1
          /* INFO_OFFSET */
          ] = changeState(info, 2
          /* Purged */
          );
          compactedSize += size;
        } else if (state === 0
      /* Allocated */
      ) {
          for (let j = offset; j <= i + size; j++) {
            heap[j - compactedSize] = heap[j];
          }

          table[i] = offset - compactedSize;
        } else if (state === 3
      /* Pointer */
      ) {
          table[i] = offset - compactedSize;
        }
    }

    this.offset = this.offset - compactedSize;
  }

  pushPlaceholder(valueFunc) {
    this.sizeCheck();
    let address = this.offset++;
    this.heap[address] = 2147483647
    /* MAX_SIZE */
    ;
    this.placeholders.push([address, valueFunc]);
  }

  pushStdlib(operand) {
    this.sizeCheck();
    let address = this.offset++;
    this.heap[address] = 2147483647
    /* MAX_SIZE */
    ;
    this.stdlibs.push([address, operand]);
  }

  patchPlaceholders() {
    let {
      placeholders
    } = this;

    for (let i = 0; i < placeholders.length; i++) {
      let [address, getValue] = placeholders[i];
      this.setbyaddr(address, getValue());
    }
  }

  patchStdlibs(stdlib) {
    let {
      stdlibs
    } = this;

    for (let i = 0; i < stdlibs.length; i++) {
      let [address, {
        value
      }] = stdlibs[i];
      this.setbyaddr(address, stdlib[value]);
    }

    this.stdlibs = [];
  }

  capture(stdlib, offset = this.offset) {
    this.patchPlaceholders();
    this.patchStdlibs(stdlib); // Only called in eager mode

    let buffer = slice(this.heap, 0, offset).buffer;
    return {
      handle: this.handle,
      table: this.table,
      buffer: buffer
    };
  }

}
class RuntimeProgramImpl {
  constructor(constants, heap) {
    this.constants = constants;
    this.heap = heap;
    this._opcode = new RuntimeOpImpl(this.heap);
  }

  opcode(offset) {
    this._opcode.offset = offset;
    return this._opcode;
  }

}

function slice(arr, start, end) {
  if (arr.slice !== undefined) {
    return arr.slice(start, end);
  }

  let ret = new Int32Array(end);

  for (; start < end; start++) {
    ret[start] = arr[start];
  }

  return ret;
}

function sizeof(table, handle) {
  {
    return -1;
  }
}

function scopesizeof(table, handle) {
  let info = table[handle + 1
  /* INFO_OFFSET */
  ];
  return info >> 2;
}

function patchStdlibs(program) {
  program.heap.patchStdlibs(program.stdlib);
}
function artifacts() {
  return {
    constants: new ConstantsImpl(),
    heap: new HeapImpl()
  };
}

var _a$1;
const TRANSACTION = symbol('TRANSACTION');

class TransactionImpl {
  constructor() {
    this.scheduledInstallManagers = [];
    this.scheduledInstallModifiers = [];
    this.scheduledUpdateModifierManagers = [];
    this.scheduledUpdateModifiers = [];
    this.createdComponents = [];
    this.createdManagers = [];
    this.updatedComponents = [];
    this.updatedManagers = [];
  }

  didCreate(component, manager) {
    this.createdComponents.push(component);
    this.createdManagers.push(manager);
  }

  didUpdate(component, manager) {
    this.updatedComponents.push(component);
    this.updatedManagers.push(manager);
  }

  scheduleInstallModifier(modifier, manager) {
    this.scheduledInstallModifiers.push(modifier);
    this.scheduledInstallManagers.push(manager);
  }

  scheduleUpdateModifier(modifier, manager) {
    this.scheduledUpdateModifiers.push(modifier);
    this.scheduledUpdateModifierManagers.push(manager);
  }

  commit() {
    let {
      createdComponents,
      createdManagers
    } = this;

    for (let i = 0; i < createdComponents.length; i++) {
      let component = createdComponents[i];
      let manager = createdManagers[i];
      manager.didCreate(component);
    }

    let {
      updatedComponents,
      updatedManagers
    } = this;

    for (let i = 0; i < updatedComponents.length; i++) {
      let component = updatedComponents[i];
      let manager = updatedManagers[i];
      manager.didUpdate(component);
    }

    let {
      scheduledInstallManagers,
      scheduledInstallModifiers
    } = this;
    let manager, modifier;

    for (let i = 0; i < scheduledInstallManagers.length; i++) {
      modifier = scheduledInstallModifiers[i];
      manager = scheduledInstallManagers[i];
      let modifierTag = manager.getTag(modifier);

      if (modifierTag !== null) {
        let tag = track( // eslint-disable-next-line no-loop-func
        () => manager.install(modifier));
        UPDATE_TAG(modifierTag, tag);
      } else {
        manager.install(modifier);
      }
    }

    let {
      scheduledUpdateModifierManagers,
      scheduledUpdateModifiers
    } = this;

    for (let i = 0; i < scheduledUpdateModifierManagers.length; i++) {
      modifier = scheduledUpdateModifiers[i];
      manager = scheduledUpdateModifierManagers[i];
      let modifierTag = manager.getTag(modifier);

      if (modifierTag !== null) {
        let tag = track( // eslint-disable-next-line no-loop-func
        () => manager.update(modifier));
        UPDATE_TAG(modifierTag, tag);
      } else {
        manager.update(modifier);
      }
    }
  }

}

class EnvironmentImpl {
  constructor(options, delegate) {
    this.delegate = delegate;
    this[_a$1] = null; // Delegate methods and values

    this.extra = this.delegate.extra;
    this.isInteractive = this.delegate.isInteractive;

    if (options.appendOperations) {
      this.appendOperations = options.appendOperations;
      this.updateOperations = options.updateOperations;
    } else if (options.document) {
      this.appendOperations = new DOMTreeConstruction(options.document);
      this.updateOperations = new DOMChangesImpl(options.document);
    } else ;
  }

  getAppendOperations() {
    return this.appendOperations;
  }

  getDOM() {
    return this.updateOperations;
  }

  begin() {
    this.delegate.onTransactionBegin();
    this[TRANSACTION] = new TransactionImpl();
  }

  get transaction() {
    return this[TRANSACTION];
  }

  didCreate(component, manager) {
    this.transaction.didCreate(component, manager);
  }

  didUpdate(component, manager) {
    this.transaction.didUpdate(component, manager);
  }

  scheduleInstallModifier(modifier, manager) {
    if (this.isInteractive) {
      this.transaction.scheduleInstallModifier(modifier, manager);
    }
  }

  scheduleUpdateModifier(modifier, manager) {
    if (this.isInteractive) {
      this.transaction.scheduleUpdateModifier(modifier, manager);
    }
  }

  commit() {
    let transaction = this.transaction;
    this[TRANSACTION] = null;
    transaction.commit();
    this.delegate.onTransactionCommit();
  }

}
_a$1 = TRANSACTION;
function runtimeContext(options, delegate, artifacts, resolver) {
  return {
    env: new EnvironmentImpl(options, delegate),
    program: new RuntimeProgramImpl(artifacts.constants, artifacts.heap),
    resolver: resolver
  };
}
function inTransaction(env, cb) {
  if (!env[TRANSACTION]) {
    env.begin();

    try {
      cb();
    } finally {
      env.commit();
    }
  } else {
    cb();
  }
}

/*
  The calling convention is:

  * 0-N block arguments at the bottom
  * 0-N positional arguments next (left-to-right)
  * 0-N named arguments next
*/

class VMArgumentsImpl {
  constructor() {
    this.stack = null;
    this.positional = new PositionalArgumentsImpl();
    this.named = new NamedArgumentsImpl();
    this.blocks = new BlockArgumentsImpl();
  }

  empty(stack) {
    let base = stack[REGISTERS][$sp] + 1;
    this.named.empty(stack, base);
    this.positional.empty(stack, base);
    this.blocks.empty(stack, base);
    return this;
  }

  setup(stack, names, blockNames, positionalCount, atNames) {
    this.stack = stack;
    /*
           | ... | blocks      | positional  | named |
           | ... | b0    b1    | p0 p1 p2 p3 | n0 n1 |
     index | ... | 4/5/6 7/8/9 | 10 11 12 13 | 14 15 |
                   ^             ^             ^  ^
                 bbase         pbase       nbase  sp
    */

    let named = this.named;
    let namedCount = names.length;
    let namedBase = stack[REGISTERS][$sp] - namedCount + 1;
    named.setup(stack, namedBase, namedCount, names, atNames);
    let positional = this.positional;
    let positionalBase = namedBase - positionalCount;
    positional.setup(stack, positionalBase, positionalCount);
    let blocks = this.blocks;
    let blocksCount = blockNames.length;
    let blocksBase = positionalBase - blocksCount * 3;
    blocks.setup(stack, blocksBase, blocksCount, blockNames);
  }

  get base() {
    return this.blocks.base;
  }

  get length() {
    return this.positional.length + this.named.length + this.blocks.length * 3;
  }

  at(pos) {
    return this.positional.at(pos);
  }

  realloc(offset) {
    let {
      stack
    } = this;

    if (offset > 0 && stack !== null) {
      let {
        positional,
        named
      } = this;
      let newBase = positional.base + offset;
      let length = positional.length + named.length;

      for (let i = length - 1; i >= 0; i--) {
        stack.copy(i + positional.base, i + newBase);
      }

      positional.base += offset;
      named.base += offset;
      stack[REGISTERS][$sp] += offset;
    }
  }

  capture() {
    let positional = this.positional.length === 0 ? EMPTY_POSITIONAL : this.positional.capture();
    let named = this.named.length === 0 ? EMPTY_NAMED : this.named.capture();
    return {
      named,
      positional
    };
  }

  clear() {
    let {
      stack,
      length
    } = this;
    if (length > 0 && stack !== null) stack.pop(length);
  }

}
class PositionalArgumentsImpl {
  constructor() {
    this.base = 0;
    this.length = 0;
    this.stack = null;
    this._references = null;
  }

  empty(stack, base) {
    this.stack = stack;
    this.base = base;
    this.length = 0;
    this._references = EMPTY_ARRAY;
  }

  setup(stack, base, length) {
    this.stack = stack;
    this.base = base;
    this.length = length;

    if (length === 0) {
      this._references = EMPTY_ARRAY;
    } else {
      this._references = null;
    }
  }

  at(position) {
    let {
      base,
      length,
      stack
    } = this;

    if (position < 0 || position >= length) {
      return UNDEFINED_REFERENCE;
    }

    return stack.get(position, base);
  }

  capture() {
    return this.references;
  }

  prepend(other) {
    let additions = other.length;

    if (additions > 0) {
      let {
        base,
        length,
        stack
      } = this;
      this.base = base = base - additions;
      this.length = length + additions;

      for (let i = 0; i < additions; i++) {
        stack.set(other[i], i, base);
      }

      this._references = null;
    }
  }

  get references() {
    let references = this._references;

    if (!references) {
      let {
        stack,
        base,
        length
      } = this;
      references = this._references = stack.slice(base, base + length);
    }

    return references;
  }

}
class NamedArgumentsImpl {
  constructor() {
    this.base = 0;
    this.length = 0;
    this._references = null;
    this._names = EMPTY_ARRAY;
    this._atNames = EMPTY_ARRAY;
  }

  empty(stack, base) {
    this.stack = stack;
    this.base = base;
    this.length = 0;
    this._references = EMPTY_ARRAY;
    this._names = EMPTY_ARRAY;
    this._atNames = EMPTY_ARRAY;
  }

  setup(stack, base, length, names, atNames) {
    this.stack = stack;
    this.base = base;
    this.length = length;

    if (length === 0) {
      this._references = EMPTY_ARRAY;
      this._names = EMPTY_ARRAY;
      this._atNames = EMPTY_ARRAY;
    } else {
      this._references = null;

      if (atNames) {
        this._names = null;
        this._atNames = names;
      } else {
        this._names = names;
        this._atNames = null;
      }
    }
  }

  get names() {
    let names = this._names;

    if (!names) {
      names = this._names = this._atNames.map(this.toSyntheticName);
    }

    return names;
  }

  get atNames() {
    let atNames = this._atNames;

    if (!atNames) {
      atNames = this._atNames = this._names.map(this.toAtName);
    }

    return atNames;
  }

  has(name) {
    return this.names.indexOf(name) !== -1;
  }

  get(name, atNames = false) {
    let {
      base,
      stack
    } = this;
    let names = atNames ? this.atNames : this.names;
    let idx = names.indexOf(name);

    if (idx === -1) {
      return UNDEFINED_REFERENCE;
    }

    let ref = stack.get(idx, base);

    {
      return ref;
    }
  }

  capture() {
    let {
      names,
      references
    } = this;
    let map = dict();

    for (let i = 0; i < names.length; i++) {
      let name = names[i];

      {
        map[name] = references[i];
      }
    }

    return map;
  }

  merge(other) {
    let keys = Object.keys(other);

    if (keys.length > 0) {
      let {
        names,
        length,
        stack
      } = this;
      let newNames = names.slice();

      for (let i = 0; i < keys.length; i++) {
        let name = keys[i];
        let idx = newNames.indexOf(name);

        if (idx === -1) {
          length = newNames.push(name);
          stack.pushJs(other[name]);
        }
      }

      this.length = length;
      this._references = null;
      this._names = newNames;
      this._atNames = null;
    }
  }

  get references() {
    let references = this._references;

    if (!references) {
      let {
        base,
        length,
        stack
      } = this;
      references = this._references = stack.slice(base, base + length);
    }

    return references;
  }

  toSyntheticName(name) {
    return name.slice(1);
  }

  toAtName(name) {
    return `@${name}`;
  }

}

function toSymbolName(name) {
  return `&${name}`;
}

class BlockArgumentsImpl {
  constructor() {
    this.internalValues = null;
    this._symbolNames = null;
    this.internalTag = null;
    this.names = EMPTY_ARRAY;
    this.length = 0;
    this.base = 0;
  }

  empty(stack, base) {
    this.stack = stack;
    this.names = EMPTY_ARRAY;
    this.base = base;
    this.length = 0;
    this._symbolNames = null;
    this.internalTag = CONSTANT_TAG;
    this.internalValues = EMPTY_ARRAY;
  }

  setup(stack, base, length, names) {
    this.stack = stack;
    this.names = names;
    this.base = base;
    this.length = length;
    this._symbolNames = null;

    if (length === 0) {
      this.internalTag = CONSTANT_TAG;
      this.internalValues = EMPTY_ARRAY;
    } else {
      this.internalTag = null;
      this.internalValues = null;
    }
  }

  get values() {
    let values = this.internalValues;

    if (!values) {
      let {
        base,
        length,
        stack
      } = this;
      values = this.internalValues = stack.slice(base, base + length * 3);
    }

    return values;
  }

  has(name) {
    return this.names.indexOf(name) !== -1;
  }

  get(name) {
    let idx = this.names.indexOf(name);

    if (idx === -1) {
      return null;
    }

    let {
      base,
      stack
    } = this;
    let table = stack.get(idx * 3, base);
    let scope = stack.get(idx * 3 + 1, base);
    let handle = stack.get(idx * 3 + 2, base);
    return handle === null ? null : [handle, scope, table];
  }

  capture() {
    return new CapturedBlockArgumentsImpl(this.names, this.values);
  }

  get symbolNames() {
    let symbolNames = this._symbolNames;

    if (symbolNames === null) {
      symbolNames = this._symbolNames = this.names.map(toSymbolName);
    }

    return symbolNames;
  }

}

class CapturedBlockArgumentsImpl {
  constructor(names, values) {
    this.names = names;
    this.values = values;
    this.length = names.length;
  }

  has(name) {
    return this.names.indexOf(name) !== -1;
  }

  get(name) {
    let idx = this.names.indexOf(name);
    if (idx === -1) return null;
    return [this.values[idx * 3 + 2], this.values[idx * 3 + 1], this.values[idx * 3]];
  }

}
function reifyPositional(positional) {
  return positional.map(valueForRef);
}
const EMPTY_NAMED = Object.freeze(Object.create(null));
const EMPTY_POSITIONAL = EMPTY_ARRAY;

function initializeRegistersWithSP(sp) {
  return [0, -1, sp, 0];
}
class LowLevelVM {
  constructor(stack, heap, program, externs, registers) {
    this.stack = stack;
    this.heap = heap;
    this.program = program;
    this.externs = externs;
    this.registers = registers;
    this.currentOpSize = 0;
  }

  fetchRegister(register) {
    return this.registers[register];
  }

  loadRegister(register, value) {
    this.registers[register] = value;
  }

  setPc(pc) {
    this.registers[$pc] = pc;
  } // Start a new frame and save $ra and $fp on the stack


  pushFrame() {
    this.stack.pushSmallInt(this.registers[$ra]);
    this.stack.pushSmallInt(this.registers[$fp]);
    this.registers[$fp] = this.registers[$sp] - 1;
  } // Restore $ra, $sp and $fp


  popFrame() {
    this.registers[$sp] = this.registers[$fp] - 1;
    this.registers[$ra] = this.stack.get(0);
    this.registers[$fp] = this.stack.get(1);
  }

  pushSmallFrame() {
    this.stack.pushSmallInt(this.registers[$ra]);
  }

  popSmallFrame() {
    this.registers[$ra] = this.stack.popSmallInt();
  } // Jump to an address in `program`


  goto(offset) {
    this.setPc(this.target(offset));
  }

  target(offset) {
    return this.registers[$pc] + offset - this.currentOpSize;
  } // Save $pc into $ra, then jump to a new address in `program` (jal in MIPS)


  call(handle) {
    this.registers[$ra] = this.registers[$pc];
    this.setPc(this.heap.getaddr(handle));
  } // Put a specific `program` address in $ra


  returnTo(offset) {
    this.registers[$ra] = this.target(offset);
  } // Return to the `program` address stored in $ra


  return() {
    this.setPc(this.registers[$ra]);
  }

  nextStatement() {
    let {
      registers,
      program
    } = this;
    let pc = registers[$pc];

    if (pc === -1) {
      return null;
    } // We have to save off the current operations size so that
    // when we do a jump we can calculate the correct offset
    // to where we are going. We can't simply ask for the size
    // in a jump because we have have already incremented the
    // program counter to the next instruction prior to executing.


    let opcode = program.opcode(pc);
    let operationSize = this.currentOpSize = opcode.size;
    this.registers[$pc] += operationSize;
    return opcode;
  }

  evaluateOuter(opcode, vm) {
    {
      this.evaluateInner(opcode, vm);
    }
  }

  evaluateInner(opcode, vm) {
    if (opcode.isMachine) {
      this.evaluateMachine(opcode);
    } else {
      this.evaluateSyscall(opcode, vm);
    }
  }

  evaluateMachine(opcode) {
    switch (opcode.type) {
      case 0
      /* PushFrame */
      :
        return this.pushFrame();

      case 1
      /* PopFrame */
      :
        return this.popFrame();

      case 3
      /* InvokeStatic */
      :
        return this.call(opcode.op1);

      case 2
      /* InvokeVirtual */
      :
        return this.call(this.stack.popSmallInt());

      case 4
      /* Jump */
      :
        return this.goto(opcode.op1);

      case 5
      /* Return */
      :
        return this.return();

      case 6
      /* ReturnTo */
      :
        return this.returnTo(opcode.op1);
    }
  }

  evaluateSyscall(opcode, vm) {
    APPEND_OPCODES.evaluate(vm, opcode, opcode.type);
  }

}

class UpdatingVM {
  constructor(env, {
    alwaysRevalidate = false
  }) {
    this.frameStack = new StackImpl();
    this.env = env;
    this.dom = env.getDOM();
    this.alwaysRevalidate = alwaysRevalidate;
  }

  execute(opcodes, handler) {
    {
      this._execute(opcodes, handler);
    }
  }

  _execute(opcodes, handler) {
    let {
      frameStack
    } = this;
    this.try(opcodes, handler);

    while (true) {
      if (frameStack.isEmpty()) break;
      let opcode = this.frame.nextStatement();

      if (opcode === undefined) {
        frameStack.pop();
        continue;
      }

      opcode.evaluate(this);
    }
  }

  get frame() {
    return this.frameStack.current;
  }

  goto(index) {
    this.frame.goto(index);
  }

  try(ops, handler) {
    this.frameStack.push(new UpdatingVMFrame(ops, handler));
  }

  throw() {
    this.frame.handleException();
    this.frameStack.pop();
  }

}
class ResumableVMStateImpl {
  constructor(state, resumeCallback) {
    this.state = state;
    this.resumeCallback = resumeCallback;
  }

  resume(runtime, builder) {
    return this.resumeCallback(runtime, this.state, builder);
  }

}
class BlockOpcode extends UpdatingOpcode {
  constructor(state, runtime, bounds, children) {
    super();
    this.state = state;
    this.runtime = runtime;
    this.type = 'block';
    this.children = children;
    this.bounds = bounds;
  }

  parentElement() {
    return this.bounds.parentElement();
  }

  firstNode() {
    return this.bounds.firstNode();
  }

  lastNode() {
    return this.bounds.lastNode();
  }

  evaluate(vm) {
    vm.try(this.children, null);
  }

}
class TryOpcode extends BlockOpcode {
  constructor() {
    super(...arguments);
    this.type = 'try';
  }

  evaluate(vm) {
    vm.try(this.children, this);
  }

  handleException() {
    let {
      state,
      bounds,
      runtime
    } = this;
    destroyChildren(this);
    let elementStack = NewElementBuilder.resume(runtime.env, bounds);
    let vm = state.resume(runtime, elementStack);
    let updating = [];
    let children = this.children = [];
    let result = vm.execute(vm => {
      vm.pushUpdating(updating);
      vm.updateWith(this);
      vm.pushUpdating(children);
    });
    associateDestroyableChild(this, result.drop);
  }

}
class ListItemOpcode extends TryOpcode {
  constructor(state, runtime, bounds, key, memo, value) {
    super(state, runtime, bounds, []);
    this.key = key;
    this.memo = memo;
    this.value = value;
    this.retained = false;
    this.index = -1;
  }

  updateReferences(item) {
    this.retained = true;
    updateRef(this.value, item.value);
    updateRef(this.memo, item.memo);
  }

  shouldRemove() {
    return !this.retained;
  }

  reset() {
    this.retained = false;
  }

}
class ListBlockOpcode extends BlockOpcode {
  constructor(state, runtime, bounds, children, iterableRef) {
    super(state, runtime, bounds, children);
    this.iterableRef = iterableRef;
    this.type = 'list-block';
    this.opcodeMap = new Map();
    this.marker = null;
    this.lastIterator = valueForRef(iterableRef);
  }

  initializeChild(opcode) {
    opcode.index = this.children.length - 1;
    this.opcodeMap.set(opcode.key, opcode);
  }

  evaluate(vm) {
    let iterator = valueForRef(this.iterableRef);

    if (this.lastIterator !== iterator) {
      let {
        bounds
      } = this;
      let {
        dom
      } = vm;
      let marker = this.marker = dom.createComment('');
      dom.insertAfter(bounds.parentElement(), marker, bounds.lastNode());
      this.sync(iterator);
      this.parentElement().removeChild(marker);
      this.marker = null;
      this.lastIterator = iterator;
    } // Run now-updated updating opcodes


    super.evaluate(vm);
  }

  sync(iterator) {
    let {
      opcodeMap: itemMap,
      children
    } = this;
    let currentOpcodeIndex = 0;
    let seenIndex = 0;
    this.children = this.bounds.boundList = [];

    while (true) {
      let item = iterator.next();
      if (item === null) break;
      let opcode = children[currentOpcodeIndex];
      let {
        key
      } = item; // Items that have already been found and moved will already be retained,
      // we can continue until we find the next unretained item

      while (opcode !== undefined && opcode.retained === true) {
        opcode = children[++currentOpcodeIndex];
      }

      if (opcode !== undefined && opcode.key === key) {
        this.retainItem(opcode, item);
        currentOpcodeIndex++;
      } else if (itemMap.has(key)) {
        let itemOpcode = itemMap.get(key); // The item opcode was seen already, so we should move it.

        if (itemOpcode.index < seenIndex) {
          this.moveItem(itemOpcode, item, opcode);
        } else {
          // Update the seen index, we are going to be moving this item around
          // so any other items that come before it will likely need to move as
          // well.
          seenIndex = itemOpcode.index;
          let seenUnretained = false; // iterate through all of the opcodes between the current position and
          // the position of the item's opcode, and determine if they are all
          // retained.

          for (let i = currentOpcodeIndex + 1; i < seenIndex; i++) {
            if (children[i].retained === false) {
              seenUnretained = true;
              break;
            }
          } // If we have seen only retained opcodes between this and the matching
          // opcode, it means that all the opcodes in between have been moved
          // already, and we can safely retain this item's opcode.


          if (seenUnretained === false) {
            this.retainItem(itemOpcode, item);
            currentOpcodeIndex = seenIndex + 1;
          } else {
            this.moveItem(itemOpcode, item, opcode);
            currentOpcodeIndex++;
          }
        }
      } else {
        this.insertItem(item, opcode);
      }
    }

    for (let i = 0; i < children.length; i++) {
      let opcode = children[i];

      if (opcode.retained === false) {
        this.deleteItem(opcode);
      } else {
        opcode.reset();
      }
    }
  }

  retainItem(opcode, item) {

    let {
      children
    } = this;
    updateRef(opcode.memo, item.memo);
    updateRef(opcode.value, item.value);
    opcode.retained = true;
    opcode.index = children.length;
    children.push(opcode);
  }

  insertItem(item, before) {

    let {
      opcodeMap,
      bounds,
      state,
      runtime,
      children
    } = this;
    let {
      key
    } = item;
    let nextSibling = before === undefined ? this.marker : before.firstNode();
    let elementStack = NewElementBuilder.forInitialRender(runtime.env, {
      element: bounds.parentElement(),
      nextSibling
    });
    let vm = state.resume(runtime, elementStack);
    vm.execute(vm => {
      vm.pushUpdating();
      let opcode = vm.enterItem(item);
      opcode.index = children.length;
      children.push(opcode);
      opcodeMap.set(key, opcode);
      associateDestroyableChild(this, opcode);
    });
  }

  moveItem(opcode, item, before) {
    let {
      children
    } = this;
    updateRef(opcode.memo, item.memo);
    updateRef(opcode.value, item.value);
    opcode.retained = true;
    let currentSibling, nextSibling;

    if (before === undefined) {
      move(opcode, this.marker);
    } else {
      currentSibling = opcode.lastNode().nextSibling;
      nextSibling = before.firstNode(); // Items are moved throughout the algorithm, so there are cases where the
      // the items already happen to be siblings (e.g. an item in between was
      // moved before this move happened). Check to see if they are siblings
      // first before doing the move.

      if (currentSibling !== nextSibling) {
        move(opcode, nextSibling);
      }
    }

    opcode.index = children.length;
    children.push(opcode);
  }

  deleteItem(opcode) {

    destroy(opcode);
    clear(opcode);
    this.opcodeMap.delete(opcode.key);
  }

}

class UpdatingVMFrame {
  constructor(ops, exceptionHandler) {
    this.ops = ops;
    this.exceptionHandler = exceptionHandler;
    this.current = 0;
  }

  goto(index) {
    this.current = index;
  }

  nextStatement() {
    return this.ops[this.current++];
  }

  handleException() {
    if (this.exceptionHandler) {
      this.exceptionHandler.handleException();
    }
  }

}

class RenderResultImpl {
  constructor(env, updating, bounds, drop) {
    this.env = env;
    this.updating = updating;
    this.bounds = bounds;
    this.drop = drop;
    associateDestroyableChild(this, drop);
    registerDestructor(this, () => clear(this.bounds));
  }

  rerender({
    alwaysRevalidate = false
  } = {
    alwaysRevalidate: false
  }) {
    let {
      env,
      updating
    } = this;
    let vm = new UpdatingVM(env, {
      alwaysRevalidate
    });
    vm.execute(updating, this);
  }

  parentElement() {
    return this.bounds.parentElement();
  }

  firstNode() {
    return this.bounds.firstNode();
  }

  lastNode() {
    return this.bounds.lastNode();
  }

  handleException() {
    throw 'this should never happen';
  }

}

class Stack {
  constructor(vec = []) {
    this.vec = vec;
  }

  clone() {
    return new Stack(this.vec.slice());
  }

  sliceFrom(start) {
    return new Stack(this.vec.slice(start));
  }

  slice(start, end) {
    return new Stack(this.vec.slice(start, end));
  }

  copy(from, to) {
    this.vec[to] = this.vec[from];
  } // TODO: how to model u64 argument?


  writeRaw(pos, value) {
    // TODO: Grow?
    this.vec[pos] = value;
  } // TODO: partially decoded enum?


  getRaw(pos) {
    return this.vec[pos];
  }

  reset() {
    this.vec.length = 0;
  }

  len() {
    return this.vec.length;
  }

}

class InnerStack {
  constructor(inner = new Stack(), js) {
    this.inner = inner;
    this.js = constants();

    if (js !== undefined) {
      this.js = this.js.concat(js);
    }
  }

  slice(start, end) {
    let out = [];

    if (start === -1) {
      return out;
    }

    for (let i = start; i < end; i++) {
      out.push(this.get(i));
    }

    return out;
  }

  copy(from, to) {
    this.inner.copy(from, to);
  }

  writeJs(pos, value) {
    let idx = this.js.length;
    this.js.push(value);
    this.inner.writeRaw(pos, encodeHandle(idx));
  }

  writeSmallInt(pos, value) {
    this.inner.writeRaw(pos, encodeImmediate(value));
  }

  writeTrue(pos) {
    this.inner.writeRaw(pos, 1
    /* ENCODED_TRUE_HANDLE */
    );
  }

  writeFalse(pos) {
    this.inner.writeRaw(pos, 0
    /* ENCODED_FALSE_HANDLE */
    );
  }

  writeNull(pos) {
    this.inner.writeRaw(pos, 2
    /* ENCODED_NULL_HANDLE */
    );
  }

  writeUndefined(pos) {
    this.inner.writeRaw(pos, 3
    /* ENCODED_UNDEFINED_HANDLE */
    );
  }

  writeRaw(pos, value) {
    this.inner.writeRaw(pos, value);
  }

  getJs(pos) {
    let value = this.inner.getRaw(pos);
    return this.js[decodeHandle(value)];
  }

  getSmallInt(pos) {
    let value = this.inner.getRaw(pos);
    return decodeImmediate(value);
  }

  get(pos) {
    let value = this.inner.getRaw(pos) | 0;

    if (isHandle(value)) {
      return this.js[decodeHandle(value)];
    } else {
      return decodeImmediate(value);
    }
  }

  reset() {
    this.inner.reset();
    this.js.length = 0;
  }

  get length() {
    return this.inner.len();
  }

}
class EvaluationStackImpl {
  // fp -> sp
  constructor(stack, registers) {
    this.stack = stack;
    this[REGISTERS] = registers;
  }

  static restore(snapshot) {
    let stack = new InnerStack();

    for (let i = 0; i < snapshot.length; i++) {
      let value = snapshot[i];

      if (typeof value === 'number' && isSmallInt(value)) {
        stack.writeRaw(i, encodeImmediate(value));
      } else if (value === true) {
        stack.writeTrue(i);
      } else if (value === false) {
        stack.writeFalse(i);
      } else if (value === null) {
        stack.writeNull(i);
      } else if (value === undefined) {
        stack.writeUndefined(i);
      } else {
        stack.writeJs(i, value);
      }
    }

    return new this(stack, initializeRegistersWithSP(snapshot.length - 1));
  }

  pushJs(value) {
    this.stack.writeJs(++this[REGISTERS][$sp], value);
  }

  pushSmallInt(value) {
    this.stack.writeSmallInt(++this[REGISTERS][$sp], value);
  }

  pushTrue() {
    this.stack.writeTrue(++this[REGISTERS][$sp]);
  }

  pushFalse() {
    this.stack.writeFalse(++this[REGISTERS][$sp]);
  }

  pushNull() {
    this.stack.writeNull(++this[REGISTERS][$sp]);
  }

  pushUndefined() {
    this.stack.writeUndefined(++this[REGISTERS][$sp]);
  }

  pushRaw(value) {
    this.stack.writeRaw(++this[REGISTERS][$sp], value);
  }

  dup(position = this[REGISTERS][$sp]) {
    this.stack.copy(position, ++this[REGISTERS][$sp]);
  }

  copy(from, to) {
    this.stack.copy(from, to);
  }

  popJs(n = 1) {
    let top = this.stack.getJs(this[REGISTERS][$sp]);
    this[REGISTERS][$sp] -= n;
    return top;
  }

  popSmallInt(n = 1) {
    let top = this.stack.getSmallInt(this[REGISTERS][$sp]);
    this[REGISTERS][$sp] -= n;
    return top;
  }

  pop(n = 1) {
    let top = this.stack.get(this[REGISTERS][$sp]);
    this[REGISTERS][$sp] -= n;
    return top;
  }

  peekJs(offset = 0) {
    return this.stack.getJs(this[REGISTERS][$sp] - offset);
  }

  peekSmallInt(offset = 0) {
    return this.stack.getSmallInt(this[REGISTERS][$sp] - offset);
  }

  peek(offset = 0) {
    return this.stack.get(this[REGISTERS][$sp] - offset);
  }

  get(offset, base = this[REGISTERS][$fp]) {
    return this.stack.get(base + offset);
  }

  set(value, offset, base = this[REGISTERS][$fp]) {
    this.stack.writeJs(base + offset, value);
  }

  slice(start, end) {
    return this.stack.slice(start, end);
  }

  capture(items) {
    let end = this[REGISTERS][$sp] + 1;
    let start = end - items;
    return this.stack.slice(start, end);
  }

  reset() {
    this.stack.reset();
  }

  toArray() {
    console.log(this[REGISTERS]);
    return this.stack.slice(this[REGISTERS][$fp], this[REGISTERS][$sp] + 1);
  }

}

var _a$2, _b;

class Stacks {
  constructor() {
    this.scope = new StackImpl();
    this.dynamicScope = new StackImpl();
    this.updating = new StackImpl();
    this.cache = new StackImpl();
    this.list = new StackImpl();
  }

}

class VM {
  /**
   * End of migrated.
   */
  constructor(runtime, {
    pc,
    scope,
    dynamicScope,
    stack
  }, elementStack, context) {
    this.runtime = runtime;
    this.elementStack = elementStack;
    this.context = context;
    this[_a$2] = new Stacks();
    this[_b] = new StackImpl();
    this.s0 = null;
    this.s1 = null;
    this.t0 = null;
    this.t1 = null;
    this.v0 = null;
    this.resume = initVM(this.context);

    let evalStack = EvaluationStackImpl.restore(stack);
    evalStack[REGISTERS][$pc] = pc;
    evalStack[REGISTERS][$sp] = stack.length - 1;
    evalStack[REGISTERS][$fp] = -1;
    this[HEAP] = this.program.heap;
    this[CONSTANTS] = this.program.constants;
    this.elementStack = elementStack;
    this[STACKS].scope.push(scope);
    this[STACKS].dynamicScope.push(dynamicScope);
    this[ARGS] = new VMArgumentsImpl();
    this[INNER_VM] = new LowLevelVM(evalStack, this[HEAP], runtime.program, {
      debugBefore: opcode => {
        return APPEND_OPCODES.debugBefore(this, opcode);
      },
      debugAfter: state => {
        APPEND_OPCODES.debugAfter(this, state);
      }
    }, evalStack[REGISTERS]);
    this.destructor = {};
    this[DESTROYABLE_STACK].push(this.destructor);
  }

  get stack() {
    return this[INNER_VM].stack;
  }
  /* Registers */


  get pc() {
    return this[INNER_VM].fetchRegister($pc);
  } // Fetch a value from a register onto the stack


  fetch(register) {
    let value = this.fetchValue(register);
    this.stack.pushJs(value);
  } // Load a value from the stack into a register


  load(register) {
    let value = this.stack.pop();
    this.loadValue(register, value);
  }

  fetchValue(register) {
    if (isLowLevelRegister(register)) {
      return this[INNER_VM].fetchRegister(register);
    }

    switch (register) {
      case $s0:
        return this.s0;

      case $s1:
        return this.s1;

      case $t0:
        return this.t0;

      case $t1:
        return this.t1;

      case $v0:
        return this.v0;
    }
  } // Load a value into a register


  loadValue(register, value) {
    if (isLowLevelRegister(register)) {
      this[INNER_VM].loadRegister(register, value);
    }

    switch (register) {
      case $s0:
        this.s0 = value;
        break;

      case $s1:
        this.s1 = value;
        break;

      case $t0:
        this.t0 = value;
        break;

      case $t1:
        this.t1 = value;
        break;

      case $v0:
        this.v0 = value;
        break;
    }
  }
  /**
   * Migrated to Inner
   */
  // Start a new frame and save $ra and $fp on the stack


  pushFrame() {
    this[INNER_VM].pushFrame();
  } // Restore $ra, $sp and $fp


  popFrame() {
    this[INNER_VM].popFrame();
  } // Jump to an address in `program`


  goto(offset) {
    this[INNER_VM].goto(offset);
  } // Save $pc into $ra, then jump to a new address in `program` (jal in MIPS)


  call(handle) {
    this[INNER_VM].call(handle);
  } // Put a specific `program` address in $ra


  returnTo(offset) {
    this[INNER_VM].returnTo(offset);
  } // Return to the `program` address stored in $ra


  return() {
    this[INNER_VM].return();
  }

  static initial(runtime, context, {
    handle,
    self,
    dynamicScope,
    treeBuilder
  }) {
    let scopeSize = runtime.program.heap.scopesizeof(handle);
    let scope = PartialScopeImpl.root(self, scopeSize);
    let state = vmState(runtime.program.heap.getaddr(handle), scope, dynamicScope);
    let vm = initVM(context)(runtime, state, treeBuilder);
    vm.pushUpdating();
    return vm;
  }

  static empty(runtime, {
    handle,
    treeBuilder,
    dynamicScope
  }, context) {
    let vm = initVM(context)(runtime, vmState(runtime.program.heap.getaddr(handle), PartialScopeImpl.root(UNDEFINED_REFERENCE, 0), dynamicScope), treeBuilder);
    vm.pushUpdating();
    return vm;
  }

  compile(block) {
    let handle = unwrapHandle(block.compile(this.context));
    return handle;
  }

  get program() {
    return this.runtime.program;
  }

  get env() {
    return this.runtime.env;
  }

  captureState(args, pc = this[INNER_VM].fetchRegister($pc)) {
    return {
      pc,
      dynamicScope: this.dynamicScope(),
      scope: this.scope(),
      stack: this.stack.capture(args)
    };
  }

  capture(args, pc = this[INNER_VM].fetchRegister($pc)) {
    return new ResumableVMStateImpl(this.captureState(args, pc), this.resume);
  }

  beginCacheGroup(name) {
    let opcodes = this.updating();
    let guard = new JumpIfNotModifiedOpcode();
    opcodes.push(guard);
    opcodes.push(new BeginTrackFrameOpcode(name));
    this[STACKS].cache.push(guard);
    beginTrackFrame();
  }

  commitCacheGroup() {
    let opcodes = this.updating();
    let guard = this[STACKS].cache.pop();
    let tag = endTrackFrame();
    opcodes.push(new EndTrackFrameOpcode(guard));
    guard.finalize(tag, opcodes.length);
  }

  enter(args) {
    let updating = [];
    let state = this.capture(args);
    let block = this.elements().pushUpdatableBlock();
    let tryOpcode = new TryOpcode(state, this.runtime, block, updating);
    this.didEnter(tryOpcode);
  }

  enterItem({
    key,
    value,
    memo
  }) {
    let {
      stack
    } = this;
    let valueRef = createIteratorItemRef(value);
    let memoRef = createIteratorItemRef(memo);
    stack.pushJs(valueRef);
    stack.pushJs(memoRef);
    let state = this.capture(2);
    let block = this.elements().pushUpdatableBlock();
    let opcode = new ListItemOpcode(state, this.runtime, block, key, memoRef, valueRef);
    this.didEnter(opcode);
    return opcode;
  }

  registerItem(opcode) {
    this.listBlock().initializeChild(opcode);
  }

  enterList(iterableRef, offset) {
    let updating = [];
    let addr = this[INNER_VM].target(offset);
    let state = this.capture(0, addr);
    let list = this.elements().pushBlockList(updating);
    let opcode = new ListBlockOpcode(state, this.runtime, list, updating, iterableRef);
    this[STACKS].list.push(opcode);
    this.didEnter(opcode);
  }

  didEnter(opcode) {
    this.associateDestroyable(opcode);
    this[DESTROYABLE_STACK].push(opcode);
    this.updateWith(opcode);
    this.pushUpdating(opcode.children);
  }

  exit() {
    this[DESTROYABLE_STACK].pop();
    this.elements().popBlock();
    this.popUpdating();
  }

  exitList() {
    this.exit();
    this[STACKS].list.pop();
  }

  pushUpdating(list = []) {
    this[STACKS].updating.push(list);
  }

  popUpdating() {
    return this[STACKS].updating.pop();
  }

  updateWith(opcode) {
    this.updating().push(opcode);
  }

  listBlock() {
    return this[STACKS].list.current;
  }

  associateDestroyable(child) {
    let parent = this[DESTROYABLE_STACK].current;
    associateDestroyableChild(parent, child);
  }

  tryUpdating() {
    return this[STACKS].updating.current;
  }

  updating() {
    return this[STACKS].updating.current;
  }

  elements() {
    return this.elementStack;
  }

  scope() {
    return this[STACKS].scope.current;
  }

  dynamicScope() {
    return this[STACKS].dynamicScope.current;
  }

  pushChildScope() {
    this[STACKS].scope.push(this.scope().child());
  }

  pushDynamicScope() {
    let child = this.dynamicScope().child();
    this[STACKS].dynamicScope.push(child);
    return child;
  }

  pushRootScope(size) {
    let scope = PartialScopeImpl.sized(size);
    this[STACKS].scope.push(scope);
    return scope;
  }

  pushScope(scope) {
    this[STACKS].scope.push(scope);
  }

  popScope() {
    this[STACKS].scope.pop();
  }

  popDynamicScope() {
    this[STACKS].dynamicScope.pop();
  } /// SCOPE HELPERS


  getSelf() {
    return this.scope().getSelf();
  }

  referenceForSymbol(symbol) {
    return this.scope().getSymbol(symbol);
  } /// EXECUTION


  execute(initialize) {
    {
      return this._execute(initialize);
    }
  }

  _execute(initialize) {

    if (initialize) initialize(this);
    let result;

    while (true) {
      result = this.next();
      if (result.done) break;
    }

    return result.value;
  }

  next() {
    let {
      env,
      elementStack
    } = this;
    let opcode = this[INNER_VM].nextStatement();
    let result;

    if (opcode !== null) {
      this[INNER_VM].evaluateOuter(opcode, this);
      result = {
        done: false,
        value: null
      };
    } else {
      // Unload the stack
      this.stack.reset();
      result = {
        done: true,
        value: new RenderResultImpl(env, this.popUpdating(), elementStack.popBlock(), this.destructor)
      };
    }

    return result;
  }

  bindDynamicScope(names) {
    let scope = this.dynamicScope();

    for (let i = names.length - 1; i >= 0; i--) {
      let name = names[i];
      scope.set(name, this.stack.popJs());
    }
  }

}
_a$2 = STACKS, _b = DESTROYABLE_STACK;

function vmState(pc, scope = PartialScopeImpl.root(UNDEFINED_REFERENCE, 0), dynamicScope) {
  return {
    pc,
    scope,
    dynamicScope,
    stack: []
  };
}

function initVM(context) {
  return (runtime, state, builder) => new VM(runtime, state, builder, context);
}

class TemplateIteratorImpl {
  constructor(vm) {
    this.vm = vm;
  }

  next() {
    return this.vm.next();
  }

  sync() {
    return this.vm.execute();
  }

}

function renderSync(env, iterator) {
  let result;
  inTransaction(env, () => result = iterator.sync());
  return result;
}

function renderInvocation(vm, invocation, definition, args) {
  // Get a list of tuples of argument names and references, like
  // [['title', reference], ['name', reference]]
  const argList = Object.keys(args).map(key => [key, args[key]]);
  const blockNames = ['main', 'else', 'attrs']; // Prefix argument names with `@` symbol

  const argNames = argList.map(([name]) => `@${name}`);
  vm.pushFrame(); // Push blocks on to the stack, three stack values per block

  for (let i = 0; i < 3 * blockNames.length; i++) {
    vm.stack.pushNull();
  }

  vm.stack.pushNull(); // For each argument, push its backing reference on to the stack

  argList.forEach(([, reference]) => {
    vm.stack.pushJs(reference);
  }); // Configure VM based on blocks and args just pushed on to the stack.

  vm[ARGS].setup(vm.stack, argNames, blockNames, 0, true); // Needed for the Op.Main opcode: arguments, component invocation object, and
  // component definition.

  vm.stack.pushJs(vm[ARGS]);
  vm.stack.pushJs(invocation);
  vm.stack.pushJs(definition);
  return new TemplateIteratorImpl(vm);
}

function renderComponent(runtime, treeBuilder, context, definition, layout, args = {}, dynamicScope = new DynamicScopeImpl()) {
  const handle = unwrapHandle(layout.compile(context));
  const invocation = {
    handle,
    symbolTable: layout.symbolTable
  };
  let vm = VM.empty(runtime, {
    treeBuilder,
    handle: context.program.stdlib.main,
    dynamicScope
  }, context);
  return renderInvocation(vm, invocation, definition, args);
}

class RehydratingCursor extends CursorImpl {
  constructor(element, nextSibling, startingBlockDepth) {
    super(element, nextSibling);
    this.startingBlockDepth = startingBlockDepth;
    this.candidate = null;
    this.injectedOmittedNode = false;
    this.openBlockDepth = startingBlockDepth - 1;
  }

}
class RehydrateBuilder extends NewElementBuilder {
  constructor(env, parentNode, nextSibling) {
    super(env, parentNode, nextSibling);
    this.unmatchedAttributes = null;
    this.blockDepth = 0;
    if (nextSibling) throw new Error('Rehydration with nextSibling not supported');
    let node = this.currentCursor.element.firstChild;

    while (node !== null) {
      if (isOpenBlock(node)) {
        break;
      }

      node = node.nextSibling;
    }
    this.candidate = node;
    const startingBlockOffset = getBlockDepth(node);

    if (startingBlockOffset !== 0) {
      // We are rehydrating from a partial tree and not the root component
      // We need to add an extra block before the first block to rehydrate correctly
      // The extra block is needed since the renderComponent API creates a synthetic component invocation which generates the extra block
      const newBlockDepth = startingBlockOffset - 1;
      const newCandidate = this.dom.createComment(`%+b:${newBlockDepth}%`);
      node.parentNode.insertBefore(newCandidate, this.candidate);
      let closingNode = node.nextSibling;

      while (closingNode !== null) {
        if (isCloseBlock(closingNode) && getBlockDepth(closingNode) === startingBlockOffset) {
          break;
        }

        closingNode = closingNode.nextSibling;
      }
      const newClosingBlock = this.dom.createComment(`%-b:${newBlockDepth}%`);
      node.parentNode.insertBefore(newClosingBlock, closingNode.nextSibling);
      this.candidate = newCandidate;
      this.startingBlockOffset = newBlockDepth;
    } else {
      this.startingBlockOffset = 0;
    }
  }

  get currentCursor() {
    return this[CURSOR_STACK].current;
  }

  get candidate() {
    if (this.currentCursor) {
      return this.currentCursor.candidate;
    }

    return null;
  }

  set candidate(node) {
    let currentCursor = this.currentCursor;
    currentCursor.candidate = node;
  }

  disableRehydration(nextSibling) {
    let currentCursor = this.currentCursor; // rehydration will be disabled until we either:
    // * hit popElement (and return to using the parent elements cursor)
    // * hit closeBlock and the next sibling is a close block comment
    //   matching the expected openBlockDepth

    currentCursor.candidate = null;
    currentCursor.nextSibling = nextSibling;
  }

  enableRehydration(candidate) {
    let currentCursor = this.currentCursor;
    currentCursor.candidate = candidate;
    currentCursor.nextSibling = null;
  }

  pushElement(element, nextSibling = null) {
    let cursor = new RehydratingCursor(element, nextSibling, this.blockDepth || 0);
    /**
     * <div>   <---------------  currentCursor.element
     *   <!--%+b:1%--> <-------  would have been removed during openBlock
     *   <div> <---------------  currentCursor.candidate -> cursor.element
     *     <!--%+b:2%--> <-----  currentCursor.candidate.firstChild -> cursor.candidate
     *     Foo
     *     <!--%-b:2%-->
     *   </div>
     *   <!--%-b:1%-->  <------  becomes currentCursor.candidate
     */

    if (this.candidate !== null) {
      cursor.candidate = element.firstChild;
      this.candidate = element.nextSibling;
    }

    this[CURSOR_STACK].push(cursor);
  } // clears until the end of the current container
  // either the current open block or higher


  clearMismatch(candidate) {
    let current = candidate;
    let currentCursor = this.currentCursor;

    if (currentCursor !== null) {
      let openBlockDepth = currentCursor.openBlockDepth;

      if (openBlockDepth >= currentCursor.startingBlockDepth) {
        while (current) {
          if (isCloseBlock(current)) {
            let closeBlockDepth = getBlockDepthWithOffset(current, this.startingBlockOffset);

            if (openBlockDepth >= closeBlockDepth) {
              break;
            }
          }

          current = this.remove(current);
        }
      } else {
        while (current !== null) {
          current = this.remove(current);
        }
      } // current cursor parentNode should be openCandidate if element
      // or openCandidate.parentNode if comment


      this.disableRehydration(current);
    }
  }

  __openBlock() {
    let {
      currentCursor
    } = this;
    if (currentCursor === null) return;
    let blockDepth = this.blockDepth;
    this.blockDepth++;
    let {
      candidate
    } = currentCursor;
    if (candidate === null) return;
    let {
      tagName
    } = currentCursor.element;

    if (isOpenBlock(candidate) && getBlockDepthWithOffset(candidate, this.startingBlockOffset) === blockDepth) {
      this.candidate = this.remove(candidate);
      currentCursor.openBlockDepth = blockDepth;
    } else if (tagName !== 'TITLE' && tagName !== 'SCRIPT' && tagName !== 'STYLE') {
      this.clearMismatch(candidate);
    }
  }

  __closeBlock() {
    let {
      currentCursor
    } = this;
    if (currentCursor === null) return; // openBlock is the last rehydrated open block

    let openBlockDepth = currentCursor.openBlockDepth; // this currently is the expected next open block depth

    this.blockDepth--;
    let {
      candidate
    } = currentCursor;
    let isRehydrating = false;

    if (candidate !== null) {
      isRehydrating = true; //assert(
      //  openBlockDepth === this.blockDepth,
      //  'when rehydrating, openBlockDepth should match this.blockDepth here'
      //);

      if (isCloseBlock(candidate) && getBlockDepthWithOffset(candidate, this.startingBlockOffset) === openBlockDepth) {
        let nextSibling = this.remove(candidate);
        this.candidate = nextSibling;
        currentCursor.openBlockDepth--;
      } else {
        // close the block and clear mismatch in parent container
        // we will be either at the end of the element
        // or at the end of our containing block
        this.clearMismatch(candidate);
        isRehydrating = false;
      }
    }

    if (isRehydrating === false) {
      // check if nextSibling matches our expected close block
      // if so, we remove the close block comment and
      // restore rehydration after clearMismatch disabled
      let nextSibling = currentCursor.nextSibling;

      if (nextSibling !== null && isCloseBlock(nextSibling) && getBlockDepthWithOffset(nextSibling, this.startingBlockOffset) === this.blockDepth) {
        // restore rehydration state
        let candidate = this.remove(nextSibling);
        this.enableRehydration(candidate);
        currentCursor.openBlockDepth--;
      }
    }
  }

  __appendNode(node) {
    let {
      candidate
    } = this; // This code path is only used when inserting precisely one node. It needs more
    // comparison logic, but we can probably lean on the cases where this code path
    // is actually used.

    if (candidate) {
      return candidate;
    } else {
      return super.__appendNode(node);
    }
  }

  __appendHTML(html) {
    let candidateBounds = this.markerBounds();

    if (candidateBounds) {
      let first = candidateBounds.firstNode();
      let last = candidateBounds.lastNode();
      let newBounds = new ConcreteBounds(this.element, first.nextSibling, last.previousSibling);
      let possibleEmptyMarker = this.remove(first);
      this.remove(last);

      if (possibleEmptyMarker !== null && isEmpty$1(possibleEmptyMarker)) {
        this.candidate = this.remove(possibleEmptyMarker);

        if (this.candidate !== null) {
          this.clearMismatch(this.candidate);
        }
      }

      return newBounds;
    } else {
      return super.__appendHTML(html);
    }
  }

  remove(node) {
    let element = node.parentNode;
    let next = node.nextSibling;
    element.removeChild(node);
    return next;
  }

  markerBounds() {
    let _candidate = this.candidate;

    if (_candidate && isMarker(_candidate)) {
      let first = _candidate;
      let last = first.nextSibling;

      while (last && !isMarker(last)) {
        last = last.nextSibling;
      }

      return new ConcreteBounds(this.element, first, last);
    } else {
      return null;
    }
  }

  __appendText(string) {
    let {
      candidate
    } = this;

    if (candidate) {
      if (isTextNode(candidate)) {
        if (candidate.nodeValue !== string) {
          candidate.nodeValue = string;
        }

        this.candidate = candidate.nextSibling;
        return candidate;
      } else if (isSeparator(candidate)) {
        this.candidate = this.remove(candidate);
        return this.__appendText(string);
      } else if (isEmpty$1(candidate) && string === '') {
        this.candidate = this.remove(candidate);
        return this.__appendText(string);
      } else {
        this.clearMismatch(candidate);
        return super.__appendText(string);
      }
    } else {
      return super.__appendText(string);
    }
  }

  __appendComment(string) {
    let _candidate = this.candidate;

    if (_candidate && isComment(_candidate)) {
      if (_candidate.nodeValue !== string) {
        _candidate.nodeValue = string;
      }

      this.candidate = _candidate.nextSibling;
      return _candidate;
    } else if (_candidate) {
      this.clearMismatch(_candidate);
    }

    return super.__appendComment(string);
  }

  __openElement(tag) {
    let _candidate = this.candidate;

    if (_candidate && isElement(_candidate) && isSameNodeType(_candidate, tag)) {
      this.unmatchedAttributes = [].slice.call(_candidate.attributes);
      return _candidate;
    } else if (_candidate) {
      if (isElement(_candidate) && _candidate.tagName === 'TBODY') {
        this.pushElement(_candidate, null);
        this.currentCursor.injectedOmittedNode = true;
        return this.__openElement(tag);
      }

      this.clearMismatch(_candidate);
    }

    return super.__openElement(tag);
  }

  __setAttribute(name, value, namespace) {
    let unmatched = this.unmatchedAttributes;

    if (unmatched) {
      let attr = findByName(unmatched, name);

      if (attr) {
        if (attr.value !== value) {
          attr.value = value;
        }

        unmatched.splice(unmatched.indexOf(attr), 1);
        return;
      }
    }

    return super.__setAttribute(name, value, namespace);
  }

  __setProperty(name, value) {
    let unmatched = this.unmatchedAttributes;

    if (unmatched) {
      let attr = findByName(unmatched, name);

      if (attr) {
        if (attr.value !== value) {
          attr.value = value;
        }

        unmatched.splice(unmatched.indexOf(attr), 1);
        return;
      }
    }

    return super.__setProperty(name, value);
  }

  __flushElement(parent, constructing) {
    let {
      unmatchedAttributes: unmatched
    } = this;

    if (unmatched) {
      for (let i = 0; i < unmatched.length; i++) {
        this.constructing.removeAttribute(unmatched[i].name);
      }

      this.unmatchedAttributes = null;
    } else {
      super.__flushElement(parent, constructing);
    }
  }

  willCloseElement() {
    let {
      candidate,
      currentCursor
    } = this;

    if (candidate !== null) {
      this.clearMismatch(candidate);
    }

    if (currentCursor && currentCursor.injectedOmittedNode) {
      this.popElement();
    }

    super.willCloseElement();
  }

  getMarker(element, guid) {
    let marker = element.querySelector(`script[glmr="${guid}"]`);

    if (marker) {
      return marker;
    }

    return null;
  }

  __pushRemoteElement(element, cursorId, insertBefore) {
    let marker = this.getMarker(element, cursorId);

    if (insertBefore === undefined) {
      while (element.firstChild !== null && element.firstChild !== marker) {
        this.remove(element.firstChild);
      }

      insertBefore = null;
    }

    let cursor = new RehydratingCursor(element, null, this.blockDepth);
    this[CURSOR_STACK].push(cursor);

    if (marker === null) {
      this.disableRehydration(insertBefore);
    } else {
      this.candidate = this.remove(marker);
    }

    let block = new RemoteLiveBlock(element);
    return this.pushLiveBlock(block, true);
  }

  didAppendBounds(bounds) {
    super.didAppendBounds(bounds);

    if (this.candidate) {
      let last = bounds.lastNode();
      this.candidate = last && last.nextSibling;
    }

    return bounds;
  }

}

function isTextNode(node) {
  return node.nodeType === 3;
}

function isComment(node) {
  return node.nodeType === 8;
}

function isOpenBlock(node) {
  return node.nodeType === 8
  /* COMMENT_NODE */
  && node.nodeValue.lastIndexOf('%+b:', 0) === 0;
}

function isCloseBlock(node) {
  return node.nodeType === 8
  /* COMMENT_NODE */
  && node.nodeValue.lastIndexOf('%-b:', 0) === 0;
}

function getBlockDepth(node) {
  return parseInt(node.nodeValue.slice(4), 10);
}

function getBlockDepthWithOffset(node, offset) {
  return getBlockDepth(node) - offset;
}

function isElement(node) {
  return node.nodeType === 1;
}

function isMarker(node) {
  return node.nodeType === 8 && node.nodeValue === '%glmr%';
}

function isSeparator(node) {
  return node.nodeType === 8 && node.nodeValue === '%|%';
}

function isEmpty$1(node) {
  return node.nodeType === 8 && node.nodeValue === '% %';
}

function isSameNodeType(candidate, tag) {
  if (candidate.namespaceURI === "http://www.w3.org/2000/svg"
  /* SVG */
  ) {
      return candidate.tagName === tag;
    }

  return candidate.tagName === tag.toUpperCase();
}

function findByName(array, name) {
  for (let i = 0; i < array.length; i++) {
    let attr = array[i];
    if (attr.name === name) return attr;
  }

  return undefined;
}

function rehydrationBuilder(env, cursor) {
  return RehydrateBuilder.forInitialRender(env, cursor);
}

function arr(value) {
  return {
    type: 'array',
    value
  };
}
function strArray(value) {
  return {
    type: 'string-array',
    value
  };
}
function serializable(value) {
  return {
    type: 'serializable',
    value
  };
}
function templateMeta(value) {
  return {
    type: 'template-meta',
    value
  };
}
function other(value) {
  return {
    type: 'other',
    value
  };
}
function label(value) {
  return {
    type: 'label',
    value
  };
}
function immediate(value) {
  return {
    type: 'immediate',
    value
  };
}
function prim(value) {
  return {
    type: 'primitive',
    value
  };
}

const MINIMAL_CAPABILITIES = {
  dynamicLayout: false,
  dynamicTag: false,
  prepareArgs: false,
  createArgs: false,
  attributeHook: false,
  elementHook: false,
  dynamicScope: false,
  createCaller: false,
  updateHook: false,
  createInstance: false,
  wrapped: false,
  willDestroy: false
};

function resolveLayoutForTag(tag, {
  resolver,
  meta: {
    referrer
  }
}) {
  let component = resolver.lookupComponent(tag, referrer);
  if (component === null) return component;
  let {
    handle,
    compilable,
    capabilities
  } = component;
  return {
    handle,
    compilable,
    capabilities: capabilities || MINIMAL_CAPABILITIES
  };
}

class InstructionEncoderImpl {
  constructor(buffer) {
    this.buffer = buffer;
    this.size = 0;
  }

  encode(type, machine) {
    if (type > 255
    /* TYPE_SIZE */
    ) {
        throw new Error(`Opcode type over 8-bits. Got ${type}.`);
      }

    let first = type | machine | arguments.length - 2 << 8
    /* ARG_SHIFT */
    ;
    this.buffer.push(first);

    for (let i = 2; i < arguments.length; i++) {
      let op = arguments[i];

      if (typeof op === 'number' && op > 2147483647
      /* MAX_SIZE */
      ) {
          throw new Error(`Operand over 32-bits. Got ${op}.`);
        }

      this.buffer.push(op);
    }

    this.size = this.buffer.length;
  }

  patch(position, target) {
    if (this.buffer[position + 1] === -1) {
      this.buffer[position + 1] = target;
    } else {
      throw new Error('Trying to patch operand in populated slot instead of a reserved slot.');
    }
  }

}

/**
 * Push a reference onto the stack corresponding to a statically known primitive
 * @param value A JavaScript primitive (undefined, null, boolean, number or string)
 */

function PushPrimitiveReference(value) {
  return [PushPrimitive(value), op(30
  /* PrimitiveReference */
  )];
}
/**
 * Push an encoded representation of a JavaScript primitive on the stack
 *
 * @param value A JavaScript primitive (undefined, null, boolean, number or string)
 */

function PushPrimitive(primitive) {
  let p = typeof primitive === 'number' && isSmallInt(primitive) ? immediate(primitive) : prim(primitive);
  return op(29
  /* Primitive */
  , p);
}
/**
 * Invoke a foreign function (a "helper") based on a statically known handle
 *
 * @param compile.handle A handle
 * @param compile.params An optional list of expressions to compile
 * @param compile.hash An optional list of named arguments (name + expression) to compile
 */

function Call({
  handle,
  params,
  hash
}) {
  return [op(0
  /* PushFrame */
  ), op('SimpleArgs', {
    params,
    hash,
    atNames: false
  }), op(16
  /* Helper */
  , handle), op(1
  /* PopFrame */
  ), op(35
  /* Fetch */
  , $v0)];
}
/**
 * Evaluate statements in the context of new dynamic scope entries. Move entries from the
 * stack into named entries in the dynamic scope, then evaluate the statements, then pop
 * the dynamic scope
 *
 * @param names a list of dynamic scope names
 * @param block a function that returns a list of statements to evaluate
 */

function DynamicScope(names, block) {
  return [op(58
  /* PushDynamicScope */
  ), op(57
  /* BindDynamicScope */
  , strArray(names)), block(), op(59
  /* PopDynamicScope */
  )];
}

/**
 * Yield to a block located at a particular symbol location.
 *
 * @param to the symbol containing the block to yield to
 * @param params optional block parameters to yield to the block
 */

function YieldBlock(to, params) {
  return [op('SimpleArgs', {
    params,
    hash: null,
    atNames: true
  }), op(23
  /* GetBlock */
  , to), op(24
  /* SpreadBlock */
  ), op('Option', op(60
  /* CompileBlock */
  )), op(63
  /* InvokeYield */
  ), op(39
  /* PopScope */
  ), op(1
  /* PopFrame */
  )];
}
/**
 * Push an (optional) yieldable block onto the stack. The yieldable block must be known
 * statically at compile time.
 *
 * @param block An optional Compilable block
 */

function PushYieldableBlock(block) {
  return [PushSymbolTable(block && block.symbolTable), op(61
  /* PushBlockScope */
  ), PushCompilable(block)];
}
/**
 * Invoke a block that is known statically at compile time.
 *
 * @param block a Compilable block
 */

function InvokeStaticBlock(block) {
  return [op(0
  /* PushFrame */
  ), PushCompilable(block), op(60
  /* CompileBlock */
  ), op(2
  /* InvokeVirtual */
  ), op(1
  /* PopFrame */
  )];
}
/**
 * Invoke a static block, preserving some number of stack entries for use in
 * updating.
 *
 * @param block A compilable block
 * @param callerCount A number of stack entries to preserve
 */

function InvokeStaticBlockWithStack(block, callerCount) {
  let {
    parameters
  } = block.symbolTable;
  let calleeCount = parameters.length;
  let count = Math.min(callerCount, calleeCount);

  if (count === 0) {
    return InvokeStaticBlock(block);
  }

  let out = [];
  out.push(op(0
  /* PushFrame */
  ));

  if (count) {
    out.push(op(38
    /* ChildScope */
    ));

    for (let i = 0; i < count; i++) {
      out.push(op(32
      /* Dup */
      , $fp, callerCount - i));
      out.push(op(19
      /* SetVariable */
      , parameters[i]));
    }
  }

  out.push(PushCompilable(block));
  out.push(op(60
  /* CompileBlock */
  ));
  out.push(op(2
  /* InvokeVirtual */
  ));

  if (count) {
    out.push(op(39
    /* PopScope */
    ));
  }

  out.push(op(1
  /* PopFrame */
  ));
  return out;
}
function PushSymbolTable(table) {
  if (table) {
    return op(62
    /* PushSymbolTable */
    , serializable(table));
  } else {
    return PushPrimitive(null);
  }
}
function PushCompilable(block) {
  if (block === null) {
    return PushPrimitive(null);
  } else {
    return op(28
    /* Constant */
    , other(block));
  }
}

function ContentTypeSwitchCases(callback) {
  // Setup the switch DSL
  let clauses = [];
  let count = 0;

  function when(match, callback) {
    clauses.push({
      match,
      callback,
      label: `CLAUSE${count++}`
    });
  } // Call the callback


  callback(when); // Emit the opcodes for the switch

  let out = [op(68
  /* Enter */
  , 1), op(75
  /* ContentType */
  ), op('StartLabels')]; // First, emit the jump opcodes. We don't need a jump for the last
  // opcode, since it bleeds directly into its clause.

  for (let clause of clauses.slice(0, -1)) {
    out.push(op(66
    /* JumpEq */
    , label(clause.label), clause.match));
  } // Enumerate the clauses in reverse order. Earlier matches will
  // require fewer checks.


  for (let i = clauses.length - 1; i >= 0; i--) {
    let clause = clauses[i];
    out.push(op('Label', clause.label), op(33
    /* Pop */
    , 1), clause.callback()); // The first match is special: it is placed directly before the END
    // label, so no additional jump is needed at the end of it.

    if (i !== 0) {
      out.push(op(4
      /* Jump */
      , label('END')));
    }
  }

  out.push(op('Label', 'END'), op('StopLabels'), op(69
  /* Exit */
  ));
  return out;
}
/**
 * A convenience for pushing some arguments on the stack and
 * running some code if the code needs to be re-executed during
 * updating execution if some of the arguments have changed.
 *
 * # Initial Execution
 *
 * The `args` function should push zero or more arguments onto
 * the stack and return the number of arguments pushed.
 *
 * The `body` function provides the instructions to execute both
 * during initial execution and during updating execution.
 *
 * Internally, this function starts by pushing a new frame, so
 * that the body can return and sets the return point ($ra) to
 * the ENDINITIAL label.
 *
 * It then executes the `args` function, which adds instructions
 * responsible for pushing the arguments for the block to the
 * stack. These arguments will be restored to the stack before
 * updating execution.
 *
 * Next, it adds the Enter opcode, which marks the current position
 * in the DOM, and remembers the current $pc (the next instruction)
 * as the first instruction to execute during updating execution.
 *
 * Next, it runs `body`, which adds the opcodes that should
 * execute both during initial execution and during updating execution.
 * If the `body` wishes to finish early, it should Jump to the
 * `FINALLY` label.
 *
 * Next, it adds the FINALLY label, followed by:
 *
 * - the Exit opcode, which finalizes the marked DOM started by the
 *   Enter opcode.
 * - the Return opcode, which returns to the current return point
 *   ($ra).
 *
 * Finally, it adds the ENDINITIAL label followed by the PopFrame
 * instruction, which restores $fp, $sp and $ra.
 *
 * # Updating Execution
 *
 * Updating execution for this `replayable` occurs if the `body` added an
 * assertion, via one of the `JumpIf`, `JumpUnless` or `AssertSame` opcodes.
 *
 * If, during updating executon, the assertion fails, the initial VM is
 * restored, and the stored arguments are pushed onto the stack. The DOM
 * between the starting and ending markers is cleared, and the VM's cursor
 * is set to the area just cleared.
 *
 * The return point ($ra) is set to -1, the exit instruction.
 *
 * Finally, the $pc is set to to the instruction saved off by the
 * Enter opcode during initial execution, and execution proceeds as
 * usual.
 *
 * The only difference is that when a `Return` instruction is
 * encountered, the program jumps to -1 rather than the END label,
 * and the PopFrame opcode is not needed.
 */

function Replayable({
  args,
  body
}) {
  // Push the arguments onto the stack. The args() function
  // tells us how many stack elements to retain for re-execution
  // when updating.
  let {
    count,
    actions
  } = args(); // Start a new label frame, to give END and RETURN
  // a unique meaning.

  return [op('StartLabels'), op(0
  /* PushFrame */
  ), // If the body invokes a block, its return will return to
  // END. Otherwise, the return in RETURN will return to END.
  op(6
  /* ReturnTo */
  , label('ENDINITIAL')), actions, // Start a new updating closure, remembering `count` elements
  // from the stack. Everything after this point, and before END,
  // will execute both initially and to update the block.
  //
  // The enter and exit opcodes also track the area of the DOM
  // associated with this block. If an assertion inside the block
  // fails (for example, the test value changes from true to false
  // in an #if), the DOM is cleared and the program is re-executed,
  // restoring `count` elements to the stack and executing the
  // instructions between the enter and exit.
  op(68
  /* Enter */
  , count), // Evaluate the body of the block. The body of the block may
  // return, which will jump execution to END during initial
  // execution, and exit the updating routine.
  body(), // All execution paths in the body should run the FINALLY once
  // they are done. It is executed both during initial execution
  // and during updating execution.
  op('Label', 'FINALLY'), // Finalize the DOM.
  op(69
  /* Exit */
  ), // In initial execution, this is a noop: it returns to the
  // immediately following opcode. In updating execution, this
  // exits the updating routine.
  op(5
  /* Return */
  ), // Cleanup code for the block. Runs on initial execution
  // but not on updating.
  op('Label', 'ENDINITIAL'), op(1
  /* PopFrame */
  ), op('StopLabels')];
}
/**
 * A specialized version of the `replayable` convenience that allows the
 * caller to provide different code based upon whether the item at
 * the top of the stack is true or false.
 *
 * As in `replayable`, the `ifTrue` and `ifFalse` code can invoke `return`.
 *
 * During the initial execution, a `return` will continue execution
 * in the cleanup code, which finalizes the current DOM block and pops
 * the current frame.
 *
 * During the updating execution, a `return` will exit the updating
 * routine, as it can reuse the DOM block and is always only a single
 * frame deep.
 */

function ReplayableIf({
  args,
  ifTrue,
  ifFalse
}) {
  return Replayable({
    args,
    body: () => {
      let out = [// If the conditional is false, jump to the ELSE label.
      op(65
      /* JumpUnless */
      , label('ELSE')), // Otherwise, execute the code associated with the true branch.
      ifTrue(), // We're done, so return. In the initial execution, this runs
      // the cleanup code. In the updating VM, it exits the updating
      // routine.
      op(4
      /* Jump */
      , label('FINALLY')), op('Label', 'ELSE')]; // If the conditional is false, and code associatied ith the
      // false branch was provided, execute it. If there was no code
      // associated with the false branch, jumping to the else statement
      // has no other behavior.

      if (ifFalse) {
        out.push(ifFalse());
      }

      return out;
    }
  });
}

function pushBuilderOp(context, op) {
  let {
    encoder
  } = context;

  switch (op.op) {
    case "Option"
    /* Option */
    :
      return concat(context, option(op));

    case "Label"
    /* Label */
    :
      return encoder.label(op.op1);

    case "StartLabels"
    /* StartLabels */
    :
      return encoder.startLabels();

    case "StopLabels"
    /* StopLabels */
    :
      return encoder.stopLabels();

    default:
      return exhausted(op);
  }
}

function option(op) {
  let value = op.op1;
  return value === null ? NONE : value;
}

function pushCompileOp(context, action) {
  concatStatements(context, compileOp(context, action));
}

function compileOp(context, action) {
  switch (action.op) {
    case "CompileBlock"
    /* CompileBlock */
    :
      return CompileBlockOp(context, action);

    case "CompileInline"
    /* CompileInline */
    :
      return CompileInlineOp(context, action);

    case "DynamicComponent"
    /* DynamicComponent */
    :
      return DynamicComponent(context, action);

    case "IfResolvedComponent"
    /* IfResolvedComponent */
    :
      return IfResolvedComponent(context, action);

    default:
      return exhausted(action);
  }
}

function CompileBlockOp(context, op) {
  return compileBlock(op.op1, context);
}

function CompileInlineOp(context, op) {
  let {
    inline,
    ifUnhandled
  } = op.op1;
  let returned = compileInline(inline, context);

  if (isHandled(returned)) {
    return returned;
  } else {
    return ifUnhandled(inline);
  }
}

function DynamicComponent(context, action) {
  let {
    definition,
    attrs,
    params,
    args,
    blocks,
    atNames,
    curried
  } = action.op1;
  let attrsBlock = attrs && attrs.length > 0 ? compilableBlock(attrs, context.meta) : null;
  let compiled = Array.isArray(blocks) || blocks === null ? namedBlocks(blocks, context.meta) : blocks;
  return InvokeDynamicComponent(context.meta, {
    definition,
    attrs: attrsBlock,
    params,
    hash: args,
    atNames,
    blocks: compiled,
    curried
  });
}

function IfResolvedComponent(context, action) {
  let {
    name,
    attrs,
    blocks,
    staticTemplate,
    dynamicTemplate,
    orElse
  } = action.op1;
  let component = resolveLayoutForTag(name, {
    resolver: context.syntax.program.resolver,
    meta: context.meta
  });
  let {
    meta
  } = context;

  if (component !== null) {
    let {
      handle,
      capabilities,
      compilable
    } = component;
    let attrsBlock = compilableBlock(attrs, meta);
    let compilableBlocks = namedBlocks(blocks, meta);

    if (compilable !== null) {
      return staticTemplate(handle, capabilities, compilable, {
        attrs: attrsBlock,
        blocks: compilableBlocks
      });
    } else {
      return dynamicTemplate(handle, capabilities, {
        attrs: attrsBlock,
        blocks: compilableBlocks
      });
    }
  } else if (orElse) {
    return orElse();
  } else {
    throw new Error(`Compile Error: Cannot find component ${name}`);
  }
}

function pushOp(encoder, constants, op) {
  if (op.op3 !== undefined) {
    encoder.push(constants, op.op, op.op1, op.op2, op.op3);
  } else if (op.op2 !== undefined) {
    encoder.push(constants, op.op, op.op1, op.op2);
  } else if (op.op1 !== undefined) {
    encoder.push(constants, op.op, op.op1);
  } else {
    encoder.push(constants, op.op);
  }
}

class Compilers {
  constructor() {
    this.names = {};
    this.funcs = [];
  }

  add(name, func) {
    this.names[name] = this.funcs.push(func) - 1;
  }

  compile(sexp, meta) {
    let name = sexp[0];
    let index = this.names[name];
    let func = this.funcs[index];
    return func(sexp, meta);
  }

}

const EXPRESSIONS = new Compilers();
EXPRESSIONS.add(31
/* Concat */
, ([, parts]) => {
  let out = [];

  for (let part of parts) {
    out.push(op('Expr', part));
  }

  out.push(op(27
  /* Concat */
  , parts.length));
  return out;
});
EXPRESSIONS.add(30
/* Call */
, ([, name, params, hash], meta) => {
  // TODO: triage this in the WF compiler
  let start = 0;
  let offset = 0;

  if (isComponent(name, meta)) {
    if (!params || params.length === 0) {
      return op('Error', {
        problem: 'component helper requires at least one argument',
        start: start,
        end: start + offset
      });
    }

    let [definition, ...restArgs] = params;
    return curryComponent({
      definition,
      params: restArgs,
      hash,
      atNames: false
    }, meta.referrer);
  }

  let nameOrError = expectString(name, meta, 'Expected call head to be a string');

  if (typeof nameOrError !== 'string') {
    return nameOrError;
  }

  return op('IfResolved', {
    kind: "Helper"
    /* Helper */
    ,
    name: nameOrError,
    andThen: handle => Call({
      handle,
      params,
      hash
    }),
    span: {
      start,
      end: start + offset
    }
  });
});

function isGetContextualFree(opcode) {
  return opcode[0] >= 34
  /* GetContextualFreeStart */
  ;
}

function isComponent(expr, meta) {
  if (!Array.isArray(expr)) {
    return false;
  }

  if (isGetContextualFree(expr)) {
    let head = expr[1];

    if (meta.upvars && meta.upvars[head] === 'component') {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

EXPRESSIONS.add(32
/* GetSymbol */
, ([, sym, path]) => withPath(op(21
/* GetVariable */
, sym), path));
EXPRESSIONS.add(33
/* GetFree */
, ([, sym, path]) => withPath(op('ResolveFree', sym), path));
EXPRESSIONS.add(34
/* GetFreeInAppendSingleId */
, ([, sym, path]) => withPath(op('ResolveContextualFree', {
  freeVar: sym,
  context: 0
  /* AppendSingleId */

}), path));
EXPRESSIONS.add(35
/* GetFreeInExpression */
, ([, sym, path]) => withPath(op('ResolveContextualFree', {
  freeVar: sym,
  context: 1
  /* Expression */

}), path));
EXPRESSIONS.add(36
/* GetFreeInCallHead */
, ([, sym, path]) => withPath(op('ResolveContextualFree', {
  freeVar: sym,
  context: 2
  /* CallHead */

}), path));
EXPRESSIONS.add(37
/* GetFreeInBlockHead */
, ([, sym, path]) => withPath(op('ResolveContextualFree', {
  freeVar: sym,
  context: 3
  /* BlockHead */

}), path));
EXPRESSIONS.add(38
/* GetFreeInModifierHead */
, ([, sym, path]) => withPath(op('ResolveContextualFree', {
  freeVar: sym,
  context: 4
  /* ModifierHead */

}), path));
EXPRESSIONS.add(39
/* GetFreeInComponentHead */
, ([, sym, path]) => withPath(op('ResolveContextualFree', {
  freeVar: sym,
  context: 5
  /* ComponentHead */

}), path));

function withPath(expr, path) {
  if (path === undefined || path.length === 0) return expr;
  if (!Array.isArray(expr)) expr = [expr];

  for (let i = 0; i < path.length; i++) {
    expr.push(op(22
    /* GetProperty */
    , path[i]));
  }

  return expr;
}

EXPRESSIONS.add(29
/* Undefined */
, () => PushPrimitiveReference(undefined));
EXPRESSIONS.add(27
/* HasBlock */
, ([, block]) => {
  return [op('Expr', block), op(25
  /* HasBlock */
  )];
});
EXPRESSIONS.add(28
/* HasBlockParams */
, ([, block]) => [op('Expr', block), op(24
/* SpreadBlock */
), op(60
/* CompileBlock */
), op(26
/* HasBlockParams */
)]);

function pushResolutionOp(encoder, context, operation, constants) {
  switch (operation.op) {
    case "SimpleArgs"
    /* SimpleArgs */
    :
      concatExpressions(encoder, context, compileSimpleArgs(operation.op1.params, operation.op1.hash, operation.op1.atNames), constants);
      break;

    case "Expr"
    /* Expr */
    :
      concatExpressions(encoder, context, expr(operation.op1, context.meta), constants);
      break;

    case "IfResolved"
    /* IfResolved */
    :
      {
        concatExpressions(encoder, context, ifResolved(context, operation), constants);
        break;
      }

    case "ResolveFree"
    /* ResolveFree */
    :
      {
        throw new Error('Unimplemented HighLevelResolutionOpcode.ResolveFree');
      }

    case "ResolveContextualFree"
    /* ResolveContextualFree */
    :
      {
        let {
          freeVar,
          context: expressionContext
        } = operation.op1;

        if (context.meta.asPartial) {
          let name = context.meta.upvars[freeVar];
          concatExpressions(encoder, context, [op(102
          /* ResolveMaybeLocal */
          , name)], constants);
          break;
        }

        switch (expressionContext) {
          case 1
          /* Expression */
          :
            {
              // in classic mode, this is always a this-fallback
              let name = context.meta.upvars[freeVar];
              concatExpressions(encoder, context, [op(21
              /* GetVariable */
              , 0), op(22
              /* GetProperty */
              , name)], constants);
              break;
            }

          case 0
          /* AppendSingleId */
          :
            {
              let resolver = context.syntax.program.resolver;
              let name = context.meta.upvars[freeVar];
              let resolvedHelper = resolver.lookupHelper(name, context.meta.referrer);
              let expressions;

              if (resolvedHelper) {
                expressions = Call({
                  handle: resolvedHelper,
                  params: null,
                  hash: null
                });
              } else {
                // in classic mode, this is always a this-fallback
                expressions = [op(21
                /* GetVariable */
                , 0), op(22
                /* GetProperty */
                , name)];
              }

              concatExpressions(encoder, context, expressions, constants);
              break;
            }

          default:
            throw new Error(`unimplemented: Can't evaluate expression in context ${expressionContext}`);
        }

        break;
      }

    default:
      return exhausted(operation);
  }
}
function expr(expression, meta) {
  if (Array.isArray(expression)) {
    return EXPRESSIONS.compile(expression, meta);
  } else {
    return [PushPrimitive(expression), op(30
    /* PrimitiveReference */
    )];
  }
}
function compileSimpleArgs(params, hash, atNames) {
  let out = [];
  let {
    count,
    actions
  } = CompilePositional(params);
  out.push(actions);
  let flags = count << 4;
  if (atNames) flags |= 0b1000;
  let names = EMPTY_ARRAY;

  if (hash) {
    names = hash[0];
    let val = hash[1];

    for (let i = 0; i < val.length; i++) {
      out.push(op('Expr', val[i]));
    }
  }

  out.push(op(82
  /* PushArgs */
  , strArray(names), strArray(EMPTY_ARRAY), flags));
  return out;
}

function ifResolved(context, {
  op1
}) {
  let {
    kind,
    name,
    andThen,
    orElse,
    span
  } = op1;
  let resolved = resolve(context.syntax.program.resolver, kind, name, context.meta.referrer);

  if (resolved !== null) {
    return andThen(resolved);
  } else if (orElse) {
    return orElse();
  } else {
    return error(`Unexpected ${kind} ${name}`, span.start, span.end);
  }
}

function resolve(resolver, kind, name, referrer) {
  switch (kind) {
    case "Modifier"
    /* Modifier */
    :
      return resolver.lookupModifier(name, referrer);

    case "Helper"
    /* Helper */
    :
      return resolver.lookupHelper(name, referrer);

    case "ComponentDefinition"
    /* ComponentDefinition */
    :
      {
        let component = resolver.lookupComponent(name, referrer);
        return component && component.handle;
      }
  }
}

const NONE = {
  'no-action': true
};
const UNHANDLED = {
  'not-handled': true
};
function isNoAction(actions) {
  return actions && !!actions['no-action'];
}
function isHandled(actions) {
  return !actions || !actions['not-handled'];
}
function concat(context, action) {
  if (isNoAction(action)) {
    return;
  } else if (Array.isArray(action)) {
    for (let item of action) {
      concat(context, item);
    }
  } else if (action.type === 'Simple') {
    pushBuilderOp(context, action);
  } else {
    pushOp(context.encoder, context.syntax.program.constants, action);
  }
}
function concatExpressions(encoder, context, action, constants) {
  if (isNoAction(action)) {
    return;
  } else if (Array.isArray(action)) {
    for (let item of action) {
      concatExpressions(encoder, context, item, constants);
    }
  } else if (action.type === 'Number') {
    pushOp(encoder, constants, action);
  } else if (action.type === 'Resolution') {
    pushResolutionOp(encoder, context, action, constants);
  } else if (action.type === 'Simple') {
    pushBuilderOp(context, action);
  } else if (action.type === 'Error') {
    encoder.error({
      problem: action.op1.problem,
      span: {
        start: action.op1.start,
        end: action.op1.end
      }
    });
  } else {
    throw assertNever(action, 'unexpected action kind');
  }
}
function concatStatements(context, action) {
  if (isNoAction(action)) {
    return;
  } else if (Array.isArray(action)) {
    for (let item of action) {
      concatStatements(context, item);
    }
  } else if (action.type === 'Number') {
    pushOp(context.encoder, context.syntax.program.constants, action);
  } else {
    if (action.type === 'Compile') {
      pushCompileOp(context, action);
    } else if (action.type === 'Resolution') {
      pushResolutionOp(context.encoder, context, action, context.syntax.program.constants);
    } else if (action.type === 'Simple') {
      pushBuilderOp(context, action);
    } else if (action.type === 'Error') ; else {
      throw assertNever(action, `unexpected action type`);
    }
  }
}

function populateBuiltins(blocks, inlines) {
  blocks.add('if', (params, _hash, blocks) => {
    if (!params || params.length !== 1) {
      throw new Error(`SYNTAX ERROR: #if requires a single argument`);
    }

    return ReplayableIf({
      args() {
        return {
          count: 1,
          actions: [op('Expr', params[0]), op(70
          /* ToBoolean */
          )]
        };
      },

      ifTrue() {
        return InvokeStaticBlock(blocks.get('default'));
      },

      ifFalse() {
        if (blocks.has('else')) {
          return InvokeStaticBlock(blocks.get('else'));
        } else {
          return NONE;
        }
      }

    });
  });
  blocks.add('unless', (params, _hash, blocks) => {
    if (!params || params.length !== 1) {
      throw new Error(`SYNTAX ERROR: #unless requires a single argument`);
    }

    return ReplayableIf({
      args() {
        return {
          count: 1,
          actions: [op('Expr', params[0]), op(70
          /* ToBoolean */
          )]
        };
      },

      ifTrue() {
        if (blocks.has('else')) {
          return InvokeStaticBlock(blocks.get('else'));
        } else {
          return NONE;
        }
      },

      ifFalse() {
        return InvokeStaticBlock(blocks.get('default'));
      }

    });
  });
  blocks.add('with', (params, _hash, blocks) => {
    if (!params || params.length !== 1) {
      throw new Error(`SYNTAX ERROR: #with requires a single argument`);
    }

    return ReplayableIf({
      args() {
        return {
          count: 2,
          actions: [op('Expr', params[0]), op(32
          /* Dup */
          , $sp, 0), op(70
          /* ToBoolean */
          )]
        };
      },

      ifTrue() {
        return InvokeStaticBlockWithStack(blocks.get('default'), 1);
      },

      ifFalse() {
        if (blocks.has('else')) {
          return InvokeStaticBlock(blocks.get('else'));
        } else {
          return NONE;
        }
      }

    });
  });
  blocks.add('let', (params, _hash, blocks) => {
    if (!params) {
      return error('let requires arguments', 0, 0);
    }

    let {
      count,
      actions
    } = CompilePositional(params);
    return [actions, InvokeStaticBlockWithStack(blocks.get('default'), count)];
  });
  blocks.add('each', (params, hash, blocks) => {
    return Replayable({
      args() {
        let actions;

        if (hash && hash[0][0] === 'key') {
          actions = [op('Expr', hash[1][0])];
        } else {
          actions = [PushPrimitiveReference(null)];
        }

        actions.push(op('Expr', params[0]));
        return {
          count: 2,
          actions
        };
      },

      body() {
        let out = [op(71
        /* EnterList */
        , label('BODY'), label('ELSE')), op(0
        /* PushFrame */
        ), op(32
        /* Dup */
        , $fp, 1), op(6
        /* ReturnTo */
        , label('ITER')), op('Label', 'ITER'), op(73
        /* Iterate */
        , label('BREAK')), op('Label', 'BODY'), InvokeStaticBlockWithStack(blocks.get('default'), 2), op(33
        /* Pop */
        , 2), op(4
        /* Jump */
        , label('FINALLY')), op('Label', 'BREAK'), op(1
        /* PopFrame */
        ), op(72
        /* ExitList */
        ), op(4
        /* Jump */
        , label('FINALLY')), op('Label', 'ELSE')];

        if (blocks.has('else')) {
          out.push(InvokeStaticBlock(blocks.get('else')));
        }

        return out;
      }

    });
  });
  blocks.add('in-element', (params, hash, blocks) => {
    if (!params || params.length !== 1) {
      throw new Error(`SYNTAX ERROR: #in-element requires a single argument`);
    }

    return ReplayableIf({
      args() {
        let [keys, values] = hash;
        let actions = [];

        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];

          if (key === 'guid' || key === 'insertBefore') {
            actions.push(op('Expr', values[i]));
          } else {
            throw new Error(`SYNTAX ERROR: #in-element does not take a \`${keys[0]}\` option`);
          }
        }

        actions.push(op('Expr', params[0]), op(32
        /* Dup */
        , $sp, 0));
        return {
          count: 4,
          actions
        };
      },

      ifTrue() {
        return [op(49
        /* PushRemoteElement */
        ), InvokeStaticBlock(blocks.get('default')), op(55
        /* PopRemoteElement */
        )];
      }

    });
  });
  blocks.add('-with-dynamic-vars', (_params, hash, blocks) => {
    if (hash) {
      let [names, expressions] = hash;
      let {
        actions
      } = CompilePositional(expressions);
      return [actions, DynamicScope(names, () => {
        return InvokeStaticBlock(blocks.get('default'));
      })];
    } else {
      return InvokeStaticBlock(blocks.get('default'));
    }
  });
  blocks.add('component', (_params, hash, blocks, context) => {
    let tag = _params[0];

    if (typeof tag === 'string') {
      let returned = StaticComponentHelper(context, _params[0], hash, blocks.get('default'));
      if (isHandled(returned)) return returned;
    }

    let [definition, ...params] = _params;
    return op('DynamicComponent', {
      definition,
      attrs: null,
      params,
      args: hash,
      atNames: false,
      blocks,
      curried: false
    });
  });
  inlines.add('component', (_name, _params, hash, context) => {
    let tag = _params && _params[0];

    if (typeof tag === 'string') {
      let returned = StaticComponentHelper(context, tag, hash, null);
      if (returned !== UNHANDLED) return returned;
    }

    let [definition, ...params] = _params;
    return InvokeDynamicComponent(context.meta, {
      definition,
      attrs: null,
      params,
      hash,
      atNames: false,
      blocks: EMPTY_BLOCKS,
      curried: false
    });
  });
  return {
    blocks,
    inlines
  };
}

class MacrosImpl {
  constructor() {
    let {
      blocks,
      inlines
    } = populateBuiltins(new Blocks(), new Inlines());
    this.blocks = blocks;
    this.inlines = inlines;
  }

}
class Blocks {
  constructor() {
    this.names = dict();
    this.funcs = [];
  }

  add(name, func) {
    this.funcs.push(func);
    this.names[name] = this.funcs.length - 1;
  }

  addMissing(func) {
    this.missing = func;
  }

  compile(name, params, hash, blocks, context) {
    let index = this.names[name];
    let macroContext = {
      resolver: context.syntax.program.resolver,
      meta: context.meta
    };

    if (index === undefined) {
      let func = this.missing;
      let handled = func(name, params, hash, blocks, macroContext);
      return handled;
    } else {
      let func = this.funcs[index];
      return func(params, hash, blocks, macroContext);
    }
  }

}
class Inlines {
  constructor() {
    this.names = dict();
    this.funcs = [];
  }

  add(name, func) {
    this.funcs.push(func);
    this.names[name] = this.funcs.length - 1;
  }

  addMissing(func) {
    this.missing = func;
  }

  compile(sexp, context) {
    let [, value] = sexp; // TODO: Fix this so that expression macros can return
    // things like components, so that {{component foo}}
    // is the same as {{(component foo)}}

    if (!Array.isArray(value)) return UNHANDLED;
    let name;
    let params;
    let hash;

    if (value[0] === 30
    /* Call */
    ) {
        let nameOrError = expectString(value[1], context.meta, 'Expected head of call to be a string');

        if (typeof nameOrError !== 'string') {
          return nameOrError;
        }

        name = nameOrError;
        params = value[2];
        hash = value[3];
      } else if (isGet(value)) {
      let pathName = simplePathName(value, context.meta);

      if (pathName === null) {
        return UNHANDLED;
      }

      name = pathName;
      params = null;
      hash = null;
    } else {
      return UNHANDLED;
    }

    let index = this.names[name];
    let macroContext = {
      resolver: context.syntax.program.resolver,
      meta: context.meta
    };

    if (index === undefined && this.missing) {
      let func = this.missing;
      return func(name, params, hash, macroContext);
    } else if (index !== undefined) {
      let func = this.funcs[index];
      return func(name, params, hash, macroContext);
    } else {
      return UNHANDLED;
    }
  }

}

function syntaxCompilationContext(artifacts, resolver, macros = new MacrosImpl()) {
  return {
    program: new CompileTimeCompilationContextImpl(artifacts, resolver),
    macros
  };
}
function templateCompilationContext(syntax, meta) {
  let encoder = new EncoderImpl();
  return {
    syntax,
    encoder,
    meta
  };
}

const STATEMENTS = new Compilers();
const INFLATE_ATTR_TABLE = ['class', 'id', 'value', 'name', 'type', 'style', 'href'];
const INFLATE_TAG_TABLE = ['div', 'span', 'p', 'a'];
function inflateTagName(tagName) {
  return typeof tagName === 'string' ? tagName : INFLATE_TAG_TABLE[tagName];
}
function inflateAttrName(attrName) {
  return typeof attrName === 'string' ? attrName : INFLATE_ATTR_TABLE[attrName];
}
STATEMENTS.add(3
/* Comment */
, sexp => op(41
/* Comment */
, sexp[1]));
STATEMENTS.add(13
/* CloseElement */
, () => op(54
/* CloseElement */
));
STATEMENTS.add(12
/* FlushElement */
, () => op(53
/* FlushElement */
));
STATEMENTS.add(4
/* Modifier */
, (sexp, meta) => {
  let [, name, params, hash] = sexp;
  let stringName = expectString(name, meta, 'Expected modifier head to be a string');

  if (typeof stringName !== 'string') {
    return stringName;
  }

  return op('IfResolved', {
    kind: "Modifier"
    /* Modifier */
    ,
    name: stringName,
    andThen: handle => [op(0
    /* PushFrame */
    ), op('SimpleArgs', {
      params,
      hash,
      atNames: false
    }), op(56
    /* Modifier */
    , handle), op(1
    /* PopFrame */
    )],
    span: {
      start: 0,
      end: 0
    }
  });
});
STATEMENTS.add(14
/* StaticAttr */
, ([, name, value, namespace]) => op(50
/* StaticAttr */
, inflateAttrName(name), value, namespace !== null && namespace !== void 0 ? namespace : null));
STATEMENTS.add(24
/* StaticComponentAttr */
, ([, name, value, namespace]) => op(105
/* StaticComponentAttr */
, inflateAttrName(name), value, namespace !== null && namespace !== void 0 ? namespace : null));
STATEMENTS.add(15
/* DynamicAttr */
, ([, name, value, namespace]) => [op('Expr', value), op(51
/* DynamicAttr */
, inflateAttrName(name), false, namespace !== null && namespace !== void 0 ? namespace : null)]);
STATEMENTS.add(22
/* TrustingDynamicAttr */
, ([, name, value, namespace]) => [op('Expr', value), op(51
/* DynamicAttr */
, inflateAttrName(name), true, namespace !== null && namespace !== void 0 ? namespace : null)]);
STATEMENTS.add(16
/* ComponentAttr */
, ([, name, value, namespace]) => [op('Expr', value), op(52
/* ComponentAttr */
, inflateAttrName(name), false, namespace !== null && namespace !== void 0 ? namespace : null)]);
STATEMENTS.add(23
/* TrustingComponentAttr */
, ([, name, value, namespace]) => [op('Expr', value), op(52
/* ComponentAttr */
, inflateAttrName(name), true, namespace !== null && namespace !== void 0 ? namespace : null)]);
STATEMENTS.add(10
/* OpenElement */
, ([, tag]) => {
  return op(47
  /* OpenElement */
  , inflateTagName(tag));
});
STATEMENTS.add(11
/* OpenElementWithSplat */
, ([, tag]) => {
  return [op(89
  /* PutComponentOperations */
  ), op(47
  /* OpenElement */
  , inflateTagName(tag))];
});
STATEMENTS.add(8
/* Component */
, ([, tag, attrs, args, blocks]) => {
  if (typeof tag === 'string') {
    return op('IfResolvedComponent', {
      name: tag,
      attrs,
      blocks,
      staticTemplate: (layoutHandle, capabilities, template, {
        blocks,
        attrs
      }) => {
        return [op(77
        /* PushComponentDefinition */
        , layoutHandle), InvokeStaticComponent({
          capabilities,
          layout: template,
          attrs,
          params: null,
          hash: args,
          blocks
        })];
      },
      dynamicTemplate: (layoutHandle, capabilities, {
        attrs,
        blocks
      }) => {
        return [op(77
        /* PushComponentDefinition */
        , layoutHandle), InvokeComponent({
          capabilities,
          attrs,
          params: null,
          hash: args,
          atNames: true,
          blocks
        })];
      }
    });
  } else {
    return op('DynamicComponent', {
      definition: tag,
      attrs,
      params: null,
      args,
      blocks,
      atNames: true,
      curried: true
    });
  }
});
STATEMENTS.add(19
/* Partial */
, ([, name, evalInfo], meta) => ReplayableIf({
  args() {
    return {
      count: 2,
      actions: [op('Expr', name), op(32
      /* Dup */
      , $sp, 0)]
    };
  },

  ifTrue() {
    return [op(101
    /* InvokePartial */
    , templateMeta(meta.referrer), strArray(meta.evalSymbols), arr(evalInfo)), op(39
    /* PopScope */
    ), op(1
    /* PopFrame */
    )];
  }

}));
STATEMENTS.add(18
/* Yield */
, ([, to, params]) => YieldBlock(to, params));
STATEMENTS.add(17
/* AttrSplat */
, ([, to]) => YieldBlock(to, EMPTY_ARRAY));
STATEMENTS.add(26
/* Debugger */
, ([, evalInfo], meta) => op(103
/* Debugger */
, strArray(meta.evalSymbols), arr(evalInfo)));
STATEMENTS.add(1
/* Append */
, sexp => {
  let [, value] = sexp;
  return op('CompileInline', {
    inline: sexp,
    ifUnhandled: () => [op(0
    /* PushFrame */
    ), op("Expr"
    /* Expr */
    , value), op(3
    /* InvokeStatic */
    , {
      type: 'stdlib',
      value: 'cautious-append'
    }), op(1
    /* PopFrame */
    )]
  });
});
STATEMENTS.add(2
/* TrustingAppend */
, sexp => {
  let [, value] = sexp;

  if (typeof value === 'string') {
    return op(40
    /* Text */
    , value);
  } // macro was ignoring trusting flag doesn't seem like {{{}}} should
  // even be passed to macros, there is no {{{component}}}


  return [op(0
  /* PushFrame */
  ), op("Expr"
  /* Expr */
  , value), op(3
  /* InvokeStatic */
  , {
    type: 'stdlib',
    value: 'trusting-append'
  }), op(1
  /* PopFrame */
  )];
});
STATEMENTS.add(6
/* Block */
, sexp => {
  return op('CompileBlock', sexp);
});

const PLACEHOLDER_HANDLE = -1;

class CompilableTemplateImpl {
  constructor(statements, meta, // Part of CompilableTemplate
  symbolTable) {
    this.statements = statements;
    this.meta = meta;
    this.symbolTable = symbolTable;
    this.compiled = null;
  } // Part of CompilableTemplate


  compile(context) {
    return maybeCompile(this, context);
  }

}

function compilable(layout) {
  let block = layout.block;
  return new CompilableTemplateImpl(block.statements, meta(layout), {
    symbols: block.symbols,
    hasEval: block.hasEval
  });
}

function maybeCompile(compilable, context) {
  if (compilable.compiled !== null) return compilable.compiled;
  compilable.compiled = PLACEHOLDER_HANDLE;
  let {
    statements,
    meta
  } = compilable;
  let result = compileStatements(statements, meta, context);
  patchStdlibs(context.program);
  compilable.compiled = result;
  return result;
}

function compileStatements(statements, meta, syntaxContext) {
  let sCompiler = STATEMENTS;
  let context = templateCompilationContext(syntaxContext, meta);

  for (let i = 0; i < statements.length; i++) {
    concatStatements(context, sCompiler.compile(statements[i], context.meta));
  }

  let handle = context.encoder.commit(syntaxContext.program.heap, meta.size);

  return handle;
}
function compilableBlock(overloadBlock, containing) {
  let block = Array.isArray(overloadBlock) ? {
    statements: overloadBlock,
    parameters: EMPTY_ARRAY
  } : overloadBlock;
  return new CompilableTemplateImpl(block.statements, containing, {
    parameters: block.parameters
  });
}

class NamedBlocksImpl {
  constructor(blocks) {
    this.blocks = blocks;
    this.names = blocks ? Object.keys(blocks) : [];
  }

  get(name) {
    if (!this.blocks) return null;
    return this.blocks[name] || null;
  }

  has(name) {
    let {
      blocks
    } = this;
    return blocks !== null && name in blocks;
  }

  with(name, block) {
    let {
      blocks
    } = this;

    if (blocks) {
      return new NamedBlocksImpl(assign({}, blocks, {
        [name]: block
      }));
    } else {
      return new NamedBlocksImpl({
        [name]: block
      });
    }
  }

  get hasAny() {
    return this.blocks !== null;
  }

}
const EMPTY_BLOCKS = new NamedBlocksImpl(null);
function namedBlocks(blocks, meta) {
  if (blocks === null) {
    return EMPTY_BLOCKS;
  }

  let out = dict();
  let [keys, values] = blocks;

  for (let i = 0; i < keys.length; i++) {
    out[keys[i]] = compilableBlock(values[i], meta);
  }

  return new NamedBlocksImpl(out);
}
function expectString(expr, meta, desc) {
  if (!meta.upvars) {
    return error(`${desc}, but there were no free variables in the template`, 0, 0);
  }

  if (!Array.isArray(expr)) {
    throw new Error(`${desc}, got ${JSON.stringify(expr)}`);
  }

  if (isGet(expr)) {
    let name = simplePathName(expr, meta);
    if (name !== null) return name;
  }

  throw new Error(`${desc}, got ${JSON.stringify(expr)}`);
}
function simplePathName(opcode, meta) {
  if (opcode.length === 3 && opcode[2].length > 0) {
    return null;
  }

  if (isGetFree(opcode)) {
    return meta.upvars[opcode[1]];
  }

  return null;
}
function isGet(opcode) {
  return opcode.length >= 2 && opcode[0] >= 32
  /* GetSymbol */
  ;
}

function isGetFree(opcode) {
  return opcode[0] >= 33
  /* GetFree */
  ;
}

function compileInline(sexp, context) {
  return context.syntax.macros.inlines.compile(sexp, context);
}
function compileBlock(block, context) {
  let [, name, params, hash, named] = block;
  let blocks = namedBlocks(named, context.meta);
  let nameOrError = expectString(name, context.meta, 'Expected block head to be a string');

  if (typeof nameOrError !== 'string') {
    return nameOrError;
  }

  return context.syntax.macros.blocks.compile(nameOrError, params || [], hash, blocks, context);
}
function commit(heap, scopeSize, buffer) {
  let handle = heap.malloc();

  for (let i = 0; i < buffer.length; i++) {
    let value = buffer[i];

    if (typeof value === 'function') {
      heap.pushPlaceholder(value);
    } else if (typeof value === 'object') {
      heap.pushStdlib(value);
    } else {
      heap.push(value);
    }
  }

  heap.finishMalloc(handle, scopeSize);
  return handle;
}

class LabelsImpl {
  constructor() {
    this.labels = dict();
    this.targets = [];
  }

  label(name, index) {
    this.labels[name] = index;
  }

  target(at, target) {
    this.targets.push({
      at,
      target
    });
  }

  patch(encoder) {
    let {
      targets,
      labels
    } = this;

    for (let i = 0; i < targets.length; i++) {
      let {
        at,
        target
      } = targets[i];
      let address = labels[target] - at;
      encoder.patch(at, address);
    }
  }

}
function error(problem, start, end) {
  return op('Error', {
    problem,
    start,
    end
  });
}
function op(name, op1, op2, op3) {
  if (typeof name === 'number') {
    if (op3 !== undefined) {
      return {
        type: 'Number',
        op: name,
        op1,
        op2,
        op3
      };
    } else if (op2 !== undefined) {
      return {
        type: 'Number',
        op: name,
        op1,
        op2
      };
    } else if (op1 !== undefined) {
      return {
        type: 'Number',
        op: name,
        op1: op1
      };
    } else {
      return {
        type: 'Number',
        op: name
      };
    }
  } else {
    let type;

    if (isCompileOpcode(name)) {
      type = 'Compile';
    } else if (isResolutionOpcode(name)) {
      type = 'Resolution';
    } else if (isSimpleOpcode(name)) {
      type = 'Simple';
    } else if (isErrorOpcode(name)) {
      type = 'Error';
    } else {
      throw new Error(`Exhausted ${name}`);
    }

    if (op1 === undefined) {
      return {
        type,
        op: name,
        op1: undefined
      };
    } else {
      return {
        type,
        op: name,
        op1
      };
    }
  }
}
class EncoderImpl {
  constructor() {
    this.labelsStack = new StackImpl();
    this.encoder = new InstructionEncoderImpl([]);
    this.errors = [];
  }

  error(error) {
    this.encoder.encode(29
    /* Primitive */
    , 0);
    this.errors.push(error);
  }

  commit(heap, size) {
    this.encoder.encode(5
    /* Return */
    , 1024
    /* MACHINE_MASK */
    );
    let handle = commit(heap, size, this.encoder.buffer);

    if (this.errors.length) {
      return {
        errors: this.errors,
        handle
      };
    } else {
      return handle;
    }
  }

  push(constants, name, ...args) {
    if (isMachineOp(name)) {
      let operands = args.map((operand, i) => this.operand(constants, operand, i));
      return this.encoder.encode(name, 1024
      /* MACHINE_MASK */
      , ...operands);
    } else {
      let operands = args.map((operand, i) => this.operand(constants, operand, i));
      return this.encoder.encode(name, 0, ...operands);
    }
  }

  operand(constants, operand, index) {
    if (operand && typeof operand === 'object' && operand.type === 'label') {
      this.currentLabels.target(this.encoder.size + index, operand.value);
      return -1;
    }

    return constant(constants, operand);
  }

  get currentLabels() {
    return this.labelsStack.current;
  }

  label(name) {
    this.currentLabels.label(name, this.encoder.size);
  }

  startLabels() {
    this.labelsStack.push(new LabelsImpl());
  }

  stopLabels() {
    let label = this.labelsStack.pop();
    label.patch(this.encoder);
  }

}

function constant(constants, operand) {
  if (typeof operand === 'number' || typeof operand === 'function') {
    return operand;
  }

  if (typeof operand === 'boolean') {
    return operand === true ? 1 : 0;
  }

  if (typeof operand === 'string') {
    return constants.value(operand);
  }

  if (operand === null) {
    return 0;
  }

  switch (operand.type) {
    case 'string-array':
      return constants.array(operand.value);

    case 'serializable':
      return constants.serializable(operand.value);

    case 'stdlib':
      return operand;

    case 'immediate':
      return encodeImmediate(operand.value);

    case 'primitive':
    case 'template-meta':
    case 'array':
    case 'other':
      return encodeHandle(constants.value(operand.value));

    case 'lookup':
      throw unreachable('lookup not reachable');

    default:
      return exhausted(operand);
  }
}

function isSimpleOpcode(op) {
  return op === 'Label' || op === 'Option' || op === 'StartLabels' || op === 'StopLabels';
}

function isCompileOpcode(op) {
  return op === 'CompileInline' || op === 'CompileBlock' || op === 'IfResolvedComponent' || op === 'DynamicComponent';
}

function isResolutionOpcode(op) {
  return op === 'IfResolved' || op === 'Expr' || op === 'SimpleArgs' || op === 'ResolveFree' || op === 'ResolveContextualFree';
}

function isErrorOpcode(op) {
  return op === 'Error';
}

/**
 * Compile arguments, pushing an Arguments object onto the stack.
 *
 * @param args.params
 * @param args.hash
 * @param args.blocks
 * @param args.atNames
 */

function CompileArgs({
  params,
  hash,
  blocks,
  atNames
}) {
  let out = [];
  let blockNames = blocks.names;

  for (let i = 0; i < blockNames.length; i++) {
    out.push(PushYieldableBlock(blocks.get(blockNames[i])));
  }

  let {
    count,
    actions
  } = CompilePositional(params);
  out.push(actions);
  let flags = count << 4;
  if (atNames) flags |= 0b1000;

  if (blocks) {
    flags |= 0b111;
  }

  let names = EMPTY_ARRAY;

  if (hash) {
    names = hash[0];
    let val = hash[1];

    for (let i = 0; i < val.length; i++) {
      out.push(op('Expr', val[i]));
    }
  }

  out.push(op(82
  /* PushArgs */
  , strArray(names), strArray(blockNames), flags));
  return out;
}
/**
 * Compile an optional list of positional arguments, which pushes each argument
 * onto the stack and returns the number of parameters compiled
 *
 * @param params an optional list of positional arguments
 */

function CompilePositional(params) {
  if (!params) return {
    count: 0,
    actions: NONE
  };
  let actions = [];

  for (let i = 0; i < params.length; i++) {
    actions.push(op('Expr', params[i]));
  }

  return {
    count: params.length,
    actions
  };
}
function meta(layout) {
  return {
    asPartial: layout.asPartial || false,
    evalSymbols: evalSymbols(layout),
    upvars: layout.block.upvars,
    referrer: layout.referrer,
    size: layout.block.symbols.length
  };
}
function evalSymbols(layout) {
  let {
    block
  } = layout;
  return block.hasEval ? block.symbols : null;
}

const ATTRS_BLOCK = '&attrs';
function StaticComponentHelper(context, tag, hash, template) {
  let component = resolveLayoutForTag(tag, context);

  if (component !== null) {
    let {
      compilable,
      handle,
      capabilities
    } = component;

    if (compilable) {
      if (hash) {
        for (let i = 0; i < hash[0].length; i = i + 1) {
          hash[0][i] = `@${hash[0][i]}`;
        }
      }

      let out = [op(77
      /* PushComponentDefinition */
      , handle)];
      out.push(InvokeStaticComponent({
        capabilities,
        layout: compilable,
        attrs: null,
        params: null,
        hash,
        blocks: new NamedBlocksImpl({
          default: template
        })
      }));
      return out;
    }
  }

  return UNHANDLED;
}
function InvokeStaticComponent({
  capabilities,
  layout,
  attrs,
  params,
  hash,
  blocks
}) {
  let {
    symbolTable
  } = layout;
  let bailOut = symbolTable.hasEval || capabilities.prepareArgs;

  if (bailOut) {
    return InvokeComponent({
      capabilities,
      attrs,
      params,
      hash,
      atNames: true,
      blocks,
      layout
    });
  }

  let out = [op(35
  /* Fetch */
  , $s0), op(32
  /* Dup */
  , $sp, 1), op(34
  /* Load */
  , $s0)];
  let {
    symbols
  } = symbolTable;

  if (capabilities.createArgs) {
    out.push(op(0
    /* PushFrame */
    ), op('SimpleArgs', {
      params,
      hash,
      atNames: true
    }));
  }

  out.push(op(97
  /* BeginComponentTransaction */
  , $s0));

  if (capabilities.dynamicScope) {
    out.push(op(58
    /* PushDynamicScope */
    ));
  }

  if (capabilities.createInstance) {
    out.push(op(87
    /* CreateComponent */
    , blocks.has('default') | 0, $s0));
  }

  if (capabilities.createArgs) {
    out.push(op(1
    /* PopFrame */
    ));
  }

  out.push(op(0
  /* PushFrame */
  ), op(88
  /* RegisterComponentDestructor */
  , $s0));
  let bindings = [];
  out.push(op(90
  /* GetComponentSelf */
  , $s0));
  bindings.push({
    symbol: 0,
    isBlock: false
  });

  for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i];

    switch (symbol.charAt(0)) {
      case '&':
        let callerBlock;

        if (symbol === ATTRS_BLOCK) {
          callerBlock = attrs;
        } else {
          callerBlock = blocks.get(symbol.slice(1));
        }

        if (callerBlock) {
          out.push(PushYieldableBlock(callerBlock));
          bindings.push({
            symbol: i + 1,
            isBlock: true
          });
        } else {
          out.push(PushYieldableBlock(null));
          bindings.push({
            symbol: i + 1,
            isBlock: true
          });
        }

        break;

      case '@':
        if (!hash) {
          break;
        }

        let [keys, values] = hash;
        let lookupName = symbol;
        let index = keys.indexOf(lookupName);

        if (index !== -1) {
          out.push(op('Expr', values[index]));
          bindings.push({
            symbol: i + 1,
            isBlock: false
          });
        }

        break;
    }
  }

  out.push(op(36
  /* RootScope */
  , symbols.length + 1, Object.keys(blocks).length > 0 ? 1 : 0));

  for (let i = bindings.length - 1; i >= 0; i--) {
    let {
      symbol,
      isBlock
    } = bindings[i];

    if (isBlock) {
      out.push(op(20
      /* SetBlock */
      , symbol));
    } else {
      out.push(op(19
      /* SetVariable */
      , symbol));
    }
  }

  out.push([op(28
  /* Constant */
  , other(layout)), op(60
  /* CompileBlock */
  ), op(2
  /* InvokeVirtual */
  )]);
  out.push(op(100
  /* DidRenderLayout */
  , $s0));
  out.push(op(1
  /* PopFrame */
  ), op(39
  /* PopScope */
  ));

  if (capabilities.dynamicScope) {
    out.push(op(59
    /* PopDynamicScope */
    ));
  }

  out.push(op(98
  /* CommitComponentTransaction */
  ), op(34
  /* Load */
  , $s0));
  return out;
}
function InvokeDynamicComponent(meta, {
  definition,
  attrs,
  params,
  hash,
  atNames,
  blocks,
  curried
}) {
  return Replayable({
    args: () => {
      return {
        count: 2,
        actions: [op('Expr', definition), op(32
        /* Dup */
        , $sp, 0)]
      };
    },
    body: () => {
      return [op(65
      /* JumpUnless */
      , label('ELSE')), curried ? op(81
      /* ResolveCurriedComponent */
      ) : op(80
      /* ResolveDynamicComponent */
      , templateMeta(meta.referrer)), op(78
      /* PushDynamicComponentInstance */
      ), InvokeComponent({
        capabilities: true,
        attrs,
        params,
        hash,
        atNames,
        blocks
      }), op('Label', 'ELSE')];
    }
  });
}
function WrappedComponent(layout, attrsBlockNumber) {
  return [op('StartLabels'), WithSavedRegister($s1, () => [op(91
  /* GetComponentTagName */
  , $s0), op(30
  /* PrimitiveReference */
  ), op(32
  /* Dup */
  , $sp, 0)]), op(65
  /* JumpUnless */
  , label('BODY')), op(35
  /* Fetch */
  , $s1), op(89
  /* PutComponentOperations */
  ), op(48
  /* OpenDynamicElement */
  ), op(99
  /* DidCreateElement */
  , $s0), YieldBlock(attrsBlockNumber, EMPTY_ARRAY), op(53
  /* FlushElement */
  ), op('Label', 'BODY'), InvokeStaticBlock(blockForLayout(layout)), op(35
  /* Fetch */
  , $s1), op(65
  /* JumpUnless */
  , label('END')), op(54
  /* CloseElement */
  ), op('Label', 'END'), op(34
  /* Load */
  , $s1), op('StopLabels')];
}
function InvokeComponent({
  capabilities,
  attrs,
  params,
  hash,
  atNames,
  blocks: namedBlocks,
  layout
}) {
  let bindableBlocks = !!namedBlocks;
  let bindableAtNames = capabilities === true || capabilities.prepareArgs || !!(hash && hash[0].length !== 0);
  let blocks = namedBlocks.with('attrs', attrs);
  return [op(35
  /* Fetch */
  , $s0), op(32
  /* Dup */
  , $sp, 1), op(34
  /* Load */
  , $s0), op(0
  /* PushFrame */
  ), CompileArgs({
    params,
    hash,
    blocks,
    atNames
  }), op(85
  /* PrepareArgs */
  , $s0), invokePreparedComponent(blocks.has('default'), bindableBlocks, bindableAtNames, () => {
    let out;

    if (layout) {
      out = [PushSymbolTable(layout.symbolTable), PushCompilable(layout), op(60
      /* CompileBlock */
      )];
    } else {
      out = [op(92
      /* GetComponentLayout */
      , $s0)];
    }

    out.push(op(95
    /* PopulateLayout */
    , $s0));
    return out;
  }), op(34
  /* Load */
  , $s0)];
}
function invokePreparedComponent(hasBlock, bindableBlocks, bindableAtNames, populateLayout = null) {
  let out = [op(97
  /* BeginComponentTransaction */
  , $s0), op(58
  /* PushDynamicScope */
  ), op(87
  /* CreateComponent */
  , hasBlock | 0, $s0)]; // this has to run after createComponent to allow
  // for late-bound layouts, but a caller is free
  // to populate the layout earlier if it wants to
  // and do nothing here.

  if (populateLayout) {
    out.push(populateLayout());
  }

  out.push(op(88
  /* RegisterComponentDestructor */
  , $s0), op(90
  /* GetComponentSelf */
  , $s0), op(37
  /* VirtualRootScope */
  , $s0), op(19
  /* SetVariable */
  , 0), op(94
  /* SetupForEval */
  , $s0), bindableAtNames ? op(17
  /* SetNamedVariables */
  , $s0) : NONE, bindableBlocks ? op(18
  /* SetBlocks */
  , $s0) : NONE, op(33
  /* Pop */
  , 1), op(96
  /* InvokeComponentLayout */
  , $s0), op(100
  /* DidRenderLayout */
  , $s0), op(1
  /* PopFrame */
  ), op(39
  /* PopScope */
  ), op(59
  /* PopDynamicScope */
  ), op(98
  /* CommitComponentTransaction */
  ));
  return out;
}
function InvokeBareComponent() {
  return [op(35
  /* Fetch */
  , $s0), op(32
  /* Dup */
  , $sp, 1), op(34
  /* Load */
  , $s0), op(0
  /* PushFrame */
  ), op(83
  /* PushEmptyArgs */
  ), op(85
  /* PrepareArgs */
  , $s0), invokePreparedComponent(false, false, true, () => [op(92
  /* GetComponentLayout */
  , $s0), op(95
  /* PopulateLayout */
  , $s0)]), op(34
  /* Load */
  , $s0)];
}
function curryComponent({
  definition,
  params,
  hash,
  atNames
}, referrer) {
  return [op(0
  /* PushFrame */
  ), op('SimpleArgs', {
    params,
    hash,
    atNames
  }), op(86
  /* CaptureArgs */
  ), op('Expr', definition), op(76
  /* CurryComponent */
  , templateMeta(referrer)), op(1
  /* PopFrame */
  ), op(35
  /* Fetch */
  , $v0)];
}

function blockForLayout(layout) {
  return compilableBlock(layout.block.statements, meta(layout));
}

function WithSavedRegister(register, block) {
  return [op(35
  /* Fetch */
  , register), block(), op(34
  /* Load */
  , register)];
}

class StdLib {
  constructor(main, trustingGuardedAppend, cautiousGuardedAppend) {
    this.main = main;
    this.trustingGuardedAppend = trustingGuardedAppend;
    this.cautiousGuardedAppend = cautiousGuardedAppend;
  }

  get 'trusting-append'() {
    return this.trustingGuardedAppend;
  }

  get 'cautious-append'() {
    return this.cautiousGuardedAppend;
  }

  getAppend(trusting) {
    return trusting ? this.trustingGuardedAppend : this.cautiousGuardedAppend;
  }

}

function main() {
  return [op(74
  /* Main */
  , $s0), invokePreparedComponent(false, false, true)];
}
/**
 * Append content to the DOM. This standard function triages content and does the
 * right thing based upon whether it's a string, safe string, component, fragment
 * or node.
 *
 * @param trusting whether to interpolate a string as raw HTML (corresponds to
 * triple curlies)
 */

function StdAppend(trusting) {
  return [ContentTypeSwitchCases(when => {
    when(1
    /* String */
    , () => {
      if (trusting) {
        return [op(67
        /* AssertSame */
        ), op(42
        /* AppendHTML */
        )];
      } else {
        return op(46
        /* AppendText */
        );
      }
    });
    when(0
    /* Component */
    , () => [op(79
    /* PushCurriedComponent */
    ), op(78
    /* PushDynamicComponentInstance */
    ), InvokeBareComponent()]);
    when(3
    /* SafeString */
    , () => [op(67
    /* AssertSame */
    ), op(43
    /* AppendSafeHTML */
    )]);
    when(4
    /* Fragment */
    , () => [op(67
    /* AssertSame */
    ), op(44
    /* AppendDocumentFragment */
    )]);
    when(5
    /* Node */
    , () => [op(67
    /* AssertSame */
    ), op(45
    /* AppendNode */
    )]);
  })];
}
function compileStd(context) {
  let mainHandle = build(context, main);
  let trustingGuardedAppend = build(context, () => StdAppend(true));
  let cautiousGuardedAppend = build(context, () => StdAppend(false));
  return new StdLib(mainHandle, trustingGuardedAppend, cautiousGuardedAppend);
}
const STDLIB_META = {
  asPartial: false,
  evalSymbols: null,
  upvars: null,
  // TODO: ??
  referrer: {},
  size: 0
};

function build(program, callback) {
  let encoder = new EncoderImpl();
  let macros = new MacrosImpl();
  let stdContext = {
    encoder,
    meta: STDLIB_META,
    syntax: {
      macros,
      program
    }
  };
  concat(stdContext, callback());
  let result = encoder.commit(program.heap, 0);

  if (typeof result !== 'number') {
    // This shouldn't be possible
    throw new Error(`Unexpected errors compiling std`);
  } else {
    return result;
  }
}

class CompileTimeCompilationContextImpl {
  constructor({
    constants,
    heap
  }, resolver) {
    this.resolver = resolver;
    this.constants = constants;
    this.heap = heap;
    this.stdlib = compileStd(this);
  }

}

class WrappedBuilder {
  constructor(layout) {
    this.layout = layout;
    this.compiled = null;
    let {
      block
    } = layout;
    let symbols = block.symbols.slice(); // ensure ATTRS_BLOCK is always included (only once) in the list of symbols

    let attrsBlockIndex = symbols.indexOf(ATTRS_BLOCK);

    if (attrsBlockIndex === -1) {
      this.attrsBlockNumber = symbols.push(ATTRS_BLOCK);
    } else {
      this.attrsBlockNumber = attrsBlockIndex + 1;
    }

    this.symbolTable = {
      hasEval: block.hasEval,
      symbols
    };
  }

  compile(syntax) {
    if (this.compiled !== null) return this.compiled;
    let m = meta(this.layout);
    let context = templateCompilationContext(syntax, m);
    let actions = WrappedComponent(this.layout, this.attrsBlockNumber);
    concatStatements(context, actions);
    let handle = context.encoder.commit(context.syntax.program.heap, m.size);

    if (typeof handle !== 'number') {
      return handle;
    }

    this.compiled = handle;

    patchStdlibs(context.syntax.program);
    return handle;
  }

}

let clientId = 0;
function templateFactory({
  id: templateId,
  meta,
  block
}) {
  let parsedBlock;
  let id = templateId || `client-${clientId++}`;

  let create = envMeta => {
    let newMeta = envMeta ? assign({}, envMeta, meta) : meta;

    if (!parsedBlock) {
      parsedBlock = JSON.parse(block);
    }

    return new TemplateImpl({
      id,
      block: parsedBlock,
      referrer: newMeta
    });
  };

  return {
    id,
    meta,
    create
  };
}

class TemplateImpl {
  constructor(parsedLayout) {
    this.parsedLayout = parsedLayout;
    this.result = 'ok';
    this.layout = null;
    this.partial = null;
    this.wrappedLayout = null;
    let {
      block
    } = parsedLayout;
    this.symbols = block.symbols;
    this.hasEval = block.hasEval;
    this.referrer = parsedLayout.referrer;
    this.id = parsedLayout.id || `client-${clientId++}`;
  }

  asLayout() {
    if (this.layout) return this.layout;
    return this.layout = compilable(assign({}, this.parsedLayout, {
      asPartial: false
    }));
  }

  asPartial() {
    if (this.partial) return this.partial;
    return this.layout = compilable(assign({}, this.parsedLayout, {
      asPartial: true
    }));
  }

  asWrappedLayout() {
    if (this.wrappedLayout) return this.wrappedLayout;
    return this.wrappedLayout = new WrappedBuilder(assign({}, this.parsedLayout, {
      asPartial: false
    }));
  }

}

function isNativeIterable(value) {
  return typeof value === 'object' && value !== null && Symbol.iterator in value;
}
class NativeIterator {
  constructor(iterable, result) {
    this.iterable = iterable;
    this.result = result;
    this.position = 0;
  }

  static from(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const result = iterator.next();
    const {
      done
    } = result;

    if (done === true) {
      return null;
    } else {
      return new this(iterator, result);
    }
  }

  isEmpty() {
    return false;
  }

  next() {
    const {
      iterable,
      result,
      position
    } = this;

    if (result.done) {
      return null;
    }

    const value = result.value;
    const memo = position;
    this.position++;
    this.result = iterable.next();
    return {
      value,
      memo
    };
  }

}

function toBool$1(predicate) {
  if (Array.isArray(predicate)) {
    return predicate.length !== 0;
  } else {
    return Boolean(predicate);
  }
}

let scheduledDestroyables = [];
let scheduledDestructors = [];
let scheduledFinishDestruction = [];
setGlobalContext({
  getProp(obj, key) {
    return obj[key];
  },

  setProp(obj, key, newValue) {
    obj[key] = newValue;
  },

  getPath(obj, key) {

    return obj[key];
  },

  scheduleRevalidate: scheduleRevalidate$1,
  toBool: toBool$1,

  toIterator(value) {
    if (isNativeIterable(value)) {
      return NativeIterator.from(value);
    }

    return null;
  },

  scheduleDestroy(destroyable, destructor) {
    scheduledDestroyables.push(destroyable);
    scheduledDestructors.push(destructor);
  },

  scheduleDestroyed(fn) {
    scheduledFinishDestruction.push(fn);
  },

  warnIfStyleNotTrusted() {// Do nothing
  }

});
/**
 * The environment delegate base class shared by both the client and SSR
 * environments. Contains shared definitions, but requires user to specify
 * `isInteractive` and a method for getting the protocols of URLs.
 *
 * @internal
 */

class BaseEnvDelegate {
  constructor() {
    this.extra = undefined;
  }

  onTransactionBegin() {// Do nothing
  }

  onTransactionCommit() {
    for (let i = 0; i < scheduledDestroyables.length; i++) {
      scheduledDestructors[i](scheduledDestroyables[i]);
    }

    scheduledFinishDestruction.forEach(fn => fn());
    scheduledDestroyables = [];
    scheduledDestructors = [];
    scheduledFinishDestruction = [];
  }

}
/**
 * The client specific environment delegate.
 *
 * @internal
 */

class ClientEnvDelegate extends BaseEnvDelegate {
  constructor() {
    super(...arguments);
    this.isInteractive = true;
    this.uselessAnchor = self.document.createElement('a');

    this.protocolForURL = url => {
      // TODO - investigate alternative approaches
      // e.g. see `installPlatformSpecificProtocolForURL` in Ember
      this.uselessAnchor.href = url;
      return this.uselessAnchor.protocol;
    };
  }

}

const TEMPLATE_MAP = new WeakMap();
const getPrototypeOf = Object.getPrototypeOf; // This is provided by the `babel-plugin-strict-template-precompile` plugin
function setComponentTemplate(template, ComponentClass) {

  TEMPLATE_MAP.set(ComponentClass, template);
  return ComponentClass;
}
function getComponentTemplate(ComponentClass) {
  let pointer = ComponentClass;

  while (pointer !== undefined && pointer !== null) {
    const manager = TEMPLATE_MAP.get(pointer);

    if (manager !== undefined) {
      return manager;
    }

    pointer = getPrototypeOf(pointer);
  }

  return undefined;
}

const OWNER_MAP = new WeakMap();
const OWNER_KEY = `__OWNER_${Math.floor(Math.random() * Date.now())}__`;
let DEFAULT_OWNER = {};
function setOwner(obj, owner) {
  OWNER_MAP.set(obj, owner);
}

///////////
const MANAGERS = new WeakMap();
const MANAGER_INSTANCES = new WeakMap();
const getPrototypeOf$1 = Object.getPrototypeOf;
function setManager(wrapper, obj) {
  MANAGERS.set(obj, wrapper);
  return obj;
}

function getManager(obj) {
  let pointer = obj;

  while (pointer !== undefined && pointer !== null) {
    const manager = MANAGERS.get(pointer);

    if (manager !== undefined) {
      return manager;
    }

    pointer = getPrototypeOf$1(pointer);
  }

  return undefined;
}

function getManagerInstanceForOwner(owner, factory) {
  let managers = MANAGER_INSTANCES.get(owner);

  if (managers === undefined) {
    managers = new WeakMap();
    MANAGER_INSTANCES.set(owner, managers);
  }

  let instance = managers.get(factory);

  if (instance === undefined) {
    instance = factory(owner);
    managers.set(factory, instance);
  } // We know for sure that it's the correct type at this point, but TS can't know


  return instance;
} ///////////
function getModifierManager(owner, definition) {
  const wrapper = getManager(definition);

  if (wrapper !== undefined && wrapper.type === 'modifier') {
    return getManagerInstanceForOwner(owner, wrapper.factory);
  }
}
function getHelperManager(owner, definition) {
  const wrapper = getManager(definition);

  if (wrapper !== undefined && wrapper.type === 'helper') {
    return getManagerInstanceForOwner(owner, wrapper.factory);
  }
}
function setComponentManager(factory, definition) {
  return setManager({
    factory,
    type: 'component'
  }, definition);
}
function getComponentManager(owner, definition) {
  const wrapper = getManager(definition);

  if (wrapper !== undefined && wrapper.type === 'component') {
    return getManagerInstanceForOwner(owner, wrapper.factory);
  }
}

function convertToInt(prop) {
  if (typeof prop === 'symbol') return null;
  const num = Number(prop);
  if (isNaN(num)) return null;
  return num % 1 === 0 ? num : null;
}

function argsProxyFor(capturedArgs, type) {
  const {
    named,
    positional
  } = capturedArgs;
  const namedHandler = {
    get(_target, prop) {
      const ref = named[prop];

      if (ref !== undefined) {
        return valueForRef(ref);
      }
    },

    has(_target, prop) {
      return prop in named;
    },

    ownKeys(_target) {
      return Object.keys(named);
    },

    isExtensible() {
      return false;
    },

    getOwnPropertyDescriptor(_target, prop) {

      return {
        enumerable: true,
        configurable: true
      };
    }

  };
  const positionalHandler = {
    get(target, prop) {
      if (prop === 'length') {
        return positional.length;
      }

      const parsed = convertToInt(prop);

      if (parsed !== null && parsed < positional.length) {
        return valueForRef(positional[parsed]);
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      return target[prop];
    },

    isExtensible() {
      return false;
    },

    has(_target, prop) {
      const parsed = convertToInt(prop);
      return parsed !== null && parsed < positional.length;
    }

  };
  const namedTarget = Object.create(null);
  const positionalTarget = [];

  return {
    named: new Proxy(namedTarget, namedHandler),
    positional: new Proxy(positionalTarget, positionalHandler)
  };
}

const VM_CAPABILITIES = {
  createInstance: true,
  dynamicLayout: false,
  dynamicTag: false,
  wrapped: false,
  prepareArgs: false,
  createArgs: true,
  attributeHook: false,
  elementHook: false,
  updateHook: false,
  createCaller: false,
  dynamicScope: true,
  willDestroy: false
};
function capabilities(managerAPI, options = {}) {
  debugAssert(managerAPI === '3.4' || managerAPI === '3.13', 'Invalid component manager compatibility specified');
  const updateHook = managerAPI !== '3.4' ? Boolean(options.updateHook) : true;
  return {
    asyncLifecycleCallbacks: Boolean(options.asyncLifecycleCallbacks),
    destructor: Boolean(options.destructor),
    updateHook
  };
}
function hasAsyncLifecycleCallbacks(delegate) {
  return delegate.capabilities.asyncLifecycleCallbacks;
}
function hasUpdateHook(delegate) {
  return delegate.capabilities.updateHook;
}
function hasAsyncUpdateHook(delegate) {
  return hasAsyncLifecycleCallbacks(delegate) && hasUpdateHook(delegate);
}
function hasDestructors(delegate) {
  return delegate.capabilities.destructor;
} ///////////

/**
  The CustomComponentManager allows addons to provide custom component
  implementations that integrate seamlessly into Ember. This is accomplished
  through a delegate, registered with the custom component manager, which
  implements a set of hooks that determine component behavior.

  To create a custom component manager, instantiate a new CustomComponentManager
  class and pass the delegate as the first argument:

  ```js
  let manager = new CustomComponentManager({
    // ...delegate implementation...
  });
  ```

  ## Delegate Hooks

  Throughout the lifecycle of a component, the component manager will invoke
  delegate hooks that are responsible for surfacing those lifecycle changes to
  the end developer.

  * `create()` - invoked when a new instance of a component should be created
  * `update()` - invoked when the arguments passed to a component change
  * `getContext()` - returns the object that should be
*/

class CustomComponentManager {
  create(env, definition, args, dynamicScope) {
    const {
      ComponentDefinition
    } = definition;
    const capturedArgs = args.capture();
    const owner = valueForRef(dynamicScope.get(OWNER_KEY));
    const delegate = getComponentManager(owner, ComponentDefinition);
    const argsProxy = argsProxyFor(capturedArgs);
    const component = delegate.createComponent(ComponentDefinition, argsProxy);
    return new VMCustomComponentState(env, delegate, component, capturedArgs, argsProxy);
  }

  update({
    delegate,
    component,
    argsProxy
  }) {
    if (hasUpdateHook(delegate)) {
      delegate.updateComponent(component, argsProxy);
    }
  }

  didCreate({
    delegate,
    component
  }) {
    if (hasAsyncLifecycleCallbacks(delegate)) {
      delegate.didCreateComponent(component);
    }
  }

  didUpdate({
    delegate,
    component
  }) {
    if (hasAsyncUpdateHook(delegate)) {
      delegate.didUpdateComponent(component);
    }
  }

  getContext({
    delegate,
    component
  }) {
    delegate.getContext(component);
  }

  getDebugName(state) {
    // TODO: This should likely call `delegate.getDebugName` somehow
    return String(state.ComponentDefinition);
  }

  getSelf({
    delegate,
    component
  }) {
    return createConstRef(delegate.getContext(component));
  }

  getDestroyable(state) {
    return state;
  }

  getCapabilities({
    capabilities
  }) {
    return Object.assign({}, VM_CAPABILITIES, {
      updateHook: capabilities.updateHook
    });
  }

  didRenderLayout() {} // eslint-disable-line @typescript-eslint/no-empty-function


  didUpdateLayout() {} // eslint-disable-line @typescript-eslint/no-empty-function


  getStaticLayout({
    definition
  }) {
    return definition.template.asLayout();
  }

} ///////////

/**
 * Stores internal state about a component instance after it's been created.
 */

class VMCustomComponentState {
  constructor(env, delegate, component, args, argsProxy) {
    this.env = env;
    this.delegate = delegate;
    this.component = component;
    this.args = args;
    this.argsProxy = argsProxy;

    if (hasDestructors(delegate)) {
      registerDestructor(this, () => delegate.destroyComponent(component));
    }
  }

}
const CUSTOM_COMPONENT_MANAGER = new CustomComponentManager();
class VMCustomComponentDefinition {
  constructor(handle, ComponentDefinition, template) {
    this.manager = CUSTOM_COMPONENT_MANAGER;
    this.handle = handle;
    this.template = unwrapTemplate(template);
    const capabilities = getComponentManager(DEFAULT_OWNER, ComponentDefinition).capabilities;
    this.state = {
      ComponentDefinition,
      capabilities,
      definition: this
    };
  }

}

function trackedMemoize(fn) {
  let lastValue;
  let tag;
  let snapshot;
  return () => {
    if (!tag || !validateTag(tag, snapshot)) {
      tag = track(() => lastValue = fn());
      snapshot = valueForTag(tag);
    }

    consumeTag(tag);
    return lastValue;
  };
}

function hasUpdateHook$1(delegate) {
  return delegate.capabilities.updateHook;
}
function hasDestroyable(delegate) {
  return delegate.capabilities.destroyable;
} ///////////

function customHelperFn(manager, definition, capturedArgs, vm) {
  let bucket;
  const argsProxy = argsProxyFor(capturedArgs);
  const hasUpdate = hasUpdateHook$1(manager);
  const getValue = trackedMemoize(() => manager.getValue(bucket));
  const createOrUpdate = trackedMemoize(() => {
    if (bucket === undefined) {
      bucket = manager.createHelper(definition, argsProxy);

      if (hasDestroyable(manager)) {
        vm.associateDestroyable(manager.getDestroyable(bucket));
      }
    } else if (hasUpdate) {
      manager.updateHelper(bucket, argsProxy);
    }
  });
  return () => {
    createOrUpdate();
    return getValue();
  };
}
/**
 * Returns a factory that produces a HelperRootReference, which is how the VM
 * expects to receive helpers currently.
 *
 * @param definition the helper definition
 */


function vmHelperFactoryFor(definition) {
  return (args, vm) => {
    const owner = valueForRef(vm.dynamicScope().get(OWNER_KEY));
    const manager = getHelperManager(owner, definition);
    const capturedArgs = args.capture();
    let helperFn;

    if (manager !== undefined) {
      helperFn = customHelperFn(manager, definition, capturedArgs, vm);
    } else {

      const func =  definition;

      helperFn = capturedArgs => {

        return func(...reifyPositional(capturedArgs.positional));
      };
    }

    return createComputeRef(() => helperFn(capturedArgs), null, helperFn.name);
  };
}

const CAPABILITIES = {
  attributeHook: false,
  createArgs: false,
  createCaller: false,
  createInstance: true,
  dynamicLayout: false,
  dynamicScope: false,
  dynamicTag: false,
  elementHook: false,
  prepareArgs: false,
  updateHook: false,
  wrapped: false,
  willDestroy: false
};
const EMPTY_SELF = createConstRef(null);
class TemplateOnlyComponentManager {
  static create() {
    return new TemplateOnlyComponentManager();
  }

  getDebugName(state) {
    return state.name;
  }

  getCapabilities() {
    return CAPABILITIES;
  }

  getStaticLayout({
    definition
  }) {
    return definition.template.asLayout();
  }

  create(_env, state) {
    // In development mode, save off state needed for error messages. This will
    // get stripped in production mode and no bucket will be instantiated.
    return  undefined;
  }

  getSelf(bucket) {
    // TODO: Make this error message better, https://github.com/glimmerjs/glimmer-vm/issues/1153
    return  EMPTY_SELF;
  }

  getTag() {
    return CONSTANT_TAG;
  }

  didRenderLayout() {} // eslint-disable-line @typescript-eslint/no-empty-function


  didCreate() {} // eslint-disable-line @typescript-eslint/no-empty-function


  didUpdateLayout() {} // eslint-disable-line @typescript-eslint/no-empty-function


  didUpdate() {} // eslint-disable-line @typescript-eslint/no-empty-function


  getDestroyable() {
    return null;
  }

}
const TEMPLATE_ONLY_MANAGER = new TemplateOnlyComponentManager();
class TemplateOnlyComponentDefinition {
  constructor(handle, name, template) {
    this.manager = TEMPLATE_ONLY_MANAGER;
    this.handle = handle;
    this.template = unwrapTemplate(template);
    this.state = {
      name,
      definition: this
    };
  }

}
class TemplateOnlyComponent {} // TODO: We end up creating an extra object here mainly to be the weakmap key

function capabilities$1(managerAPI, options = {}) {
  debugAssert(managerAPI === '3.13', 'Invalid component manager compatibility specified');
  return {
    disableAutoTracking: Boolean(options.disableAutoTracking)
  };
}

class SimpleModifierManager {
  constructor() {
    this.capabilities = capabilities$1('3.13');
  }

  createModifier(definition, args) {

    return {
      definition
    };
  }

  installModifier(bucket, element, args) {
    bucket.destructor = bucket.definition(element, ...args.positional);
    bucket.element = element;
  }

  updateModifier(bucket, args) {
    this.destroyModifier(bucket);
    this.installModifier(bucket, bucket.element, args);
  }

  destroyModifier(bucket) {
    const {
      destructor
    } = bucket;

    if (destructor !== undefined) {
      destructor();
    }
  }

}

const SIMPLE_MODIFIER_MANAGER = new SimpleModifierManager(); ///////////

class CustomModifierState {
  constructor(element, delegate, modifier, argsProxy, capturedArgs) {
    this.element = element;
    this.delegate = delegate;
    this.modifier = modifier;
    this.argsProxy = argsProxy;
    this.capturedArgs = capturedArgs;
    this.tag = createUpdatableTag();
    registerDestructor(this, () => delegate.destroyModifier(modifier, argsProxy));
  }

}
class CustomModifierManager {
  create(element, definition, args, dynamicScope) {
    const owner = valueForRef(dynamicScope.get(OWNER_KEY));
    let delegate = getModifierManager(owner, definition);

    if (delegate === undefined) {

      delegate = SIMPLE_MODIFIER_MANAGER;
    }

    const capturedArgs = args.capture();
    const argsProxy = argsProxyFor(capturedArgs);
    const instance = delegate.createModifier(definition, argsProxy);
    return new CustomModifierState(element, delegate, instance, argsProxy, capturedArgs);
  }

  getDebugName(state) {
    // TODO: This should be updated to call `delegate.getDebugName` or something along those lines
    return String(state.modifier);
  }

  getTag({
    tag
  }) {
    return tag;
  }

  install(state) {
    const {
      element,
      argsProxy,
      delegate,
      modifier
    } = state;

    if (delegate.capabilities.disableAutoTracking === true) {
      untrack(() => delegate.installModifier(modifier, element, argsProxy));
    } else {
      delegate.installModifier(modifier, element, argsProxy);
    }
  }

  update(state) {
    const {
      argsProxy,
      delegate,
      modifier
    } = state;

    if (delegate.capabilities.disableAutoTracking === true) {
      untrack(() => delegate.updateModifier(modifier, argsProxy));
    } else {
      delegate.updateModifier(modifier, argsProxy);
    }
  }

  getDestroyable(state) {
    return state;
  }

}
const CUSTOM_MODIFIER_MANAGER = new CustomModifierManager();
class VMCustomModifierDefinition {
  constructor(handle, state) {
    this.handle = handle;
    this.state = state;
    this.manager = CUSTOM_MODIFIER_MANAGER;
  }

}

let HANDLE = 0;
const VM_COMPONENT_DEFINITIONS = new WeakMap();
const VM_HELPER_DEFINITIONS = new WeakMap();
const VM_MODIFIER_DEFINITIONS = new WeakMap();
function vmDefinitionForComponent(ComponentDefinition) {
  return VM_COMPONENT_DEFINITIONS.get(ComponentDefinition) || createVMComponentDefinition(ComponentDefinition);
}
function vmDefinitionForHelper(Helper) {
  return VM_HELPER_DEFINITIONS.get(Helper) || createVMHelperDefinition(Helper);
}
function vmDefinitionForModifier(Modifier) {
  return VM_MODIFIER_DEFINITIONS.get(Modifier) || createVMModifierDefinition(Modifier);
} ///////////

function handleForBuiltIn(builtIn) {

  return HANDLE++;
}

function vmDefinitionForBuiltInHelper(helper) {
  return {
    helper,
    handle: handleForBuiltIn()
  };
} ///////////

function createVMComponentDefinition(ComponentDefinition) {
  const serializedTemplate = getComponentTemplate(ComponentDefinition);
  const template = templateFactory(serializedTemplate).create();
  let definition;

  if (ComponentDefinition instanceof TemplateOnlyComponent) {
    // TODO: We probably need a better way to get a name for the template,
    // currently it'll just be `template-only-component` which is not great
    // for debugging
    definition = new TemplateOnlyComponentDefinition(HANDLE++, 'template-only-component', template);
  } else {
    definition = new VMCustomComponentDefinition(HANDLE++, ComponentDefinition, template);
  }

  VM_COMPONENT_DEFINITIONS.set(ComponentDefinition, definition);
  return definition;
}

function createVMHelperDefinition(userDefinition) {
  const definition = {
    helper: vmHelperFactoryFor(userDefinition),
    handle: HANDLE++
  };
  VM_HELPER_DEFINITIONS.set(userDefinition, definition);
  return definition;
}

function createVMModifierDefinition(Modifier) {
  const definition = new VMCustomModifierDefinition(HANDLE++, Modifier);
  VM_MODIFIER_DEFINITIONS.set(Modifier, definition);
  return definition;
}

function ifHelper(args) {
  const positional = args.positional.capture();
  return createComputeRef(() => {
    if ( positional.length > 3) {
      throw new Error('The inline form of the `if` helper expects two or three arguments, e.g. `{{if trialExpired "Expired" expiryDate}}`.');
    }

    const [condition, truthyValue, falsyValue] = positional;

    if (toBool(valueForRef(condition)) === true) {
      return valueForRef(truthyValue);
    } else {
      return falsyValue !== undefined ? valueForRef(falsyValue) : undefined;
    }
  }, null, 'if');
}

const builtInHelpers = {
  if: vmDefinitionForBuiltInHelper(ifHelper)
}; ///////////

/**
 * The RuntimeResolver is what is used to resolve everything. It is responsible
 * for registering root components (passed to `renderComponent`), and resolving
 * all other types of resolvables.
 *
 * The CompileTimeResolver is responsible for registering everything but root
 * components, which is why `registry` is public, for ease of access.
 */

class RuntimeResolver {
  constructor() {
    this.registry = [];
  } // TODO: This is only necessary because `renderJitComponent` only receives a
  // string, can't receive a handle. We should make that optional somehow.


  registerRoot(definition) {
    const vmDefinition = vmDefinitionForComponent(definition);
    const {
      handle
    } = vmDefinition;
    this.registry[handle] = vmDefinition; // We're lying to the type system here so we can pass handle around as a
    // string. Should definitely fix this in the future.

    return handle;
  }

  lookupComponent(handle, _referrer) {
    return this.registry[handle];
  }

  resolve(handle) {
    return this.registry[handle];
  } // TODO: Make these optional


  compilable(_locator) {
    throw new Error('Method not implemented.');
  }

  lookupPartial(_name, _referrer) {
    throw new Error('Method not implemented.');
  }

} ///////////

/**
 * The CompileTimeResolver is what is used to lookup most things, with the
 * exception of root components rendered with `renderComponent`. It registers
 * the values on the RuntimeResolver, which Glimmer then uses to actually
 * resolve later on via the handle that is returned.
 */

class CompileTimeResolver {
  constructor(inner) {
    this.inner = inner;
  }

  lookupHelper(name, referrer) {
    const scope = referrer.scope();
    const {
      helper,
      handle
    } = builtInHelpers[name] || vmDefinitionForHelper(scope[name]);
    this.inner.registry[handle] = helper;
    return handle;
  }

  lookupModifier(name, referrer) {
    const scope = referrer.scope();
    const modifier = scope[name];
    const definition = vmDefinitionForModifier(modifier);
    const {
      handle
    } = definition;
    this.inner.registry[handle] = definition;
    return handle;
  }

  lookupComponent(name, referrer) {
    const scope = referrer.scope();
    const ComponentDefinition = scope[name];

    const definition = vmDefinitionForComponent(ComponentDefinition);
    const {
      state,
      manager,
      template,
      handle
    } = definition;
    this.inner.registry[handle] = definition;
    return {
      handle,
      capabilities: manager.getCapabilities(state),
      compilable: unwrapTemplate(template).asLayout()
    };
  }

  resolve(handle) {
    return this.inner.resolve(handle);
  } // TODO: Make this optional


  lookupPartial(_name, _referrer) {
    throw new Error('Method not implemented.');
  }

}

let renderNotifiers = [];

async function renderComponent$1(ComponentClass, optionsOrElement) {
  const options = optionsOrElement instanceof HTMLElement ? {
    element: optionsOrElement
  } : optionsOrElement;
  const {
    element,
    args,
    owner
  } = options;
  const document = self.document;
  const {
    env,
    iterator
  } = getTemplateIterator(ComponentClass, element, {
    document
  }, new ClientEnvDelegate(), args, owner, options.rehydrate ? rehydrationBuilder : clientBuilder);
  const result = renderSync(env, iterator);
  results.push(result);
}
const results = [];
let scheduled = false;
function scheduleRevalidate$1() {
  if (scheduled) {
    return;
  }

  scheduled = true;
  setTimeout(() => {
    scheduled = false;

    try {
      revalidate();
      renderNotifiers.forEach(([resolve]) => resolve());
    } catch (err) {
      renderNotifiers.forEach(([, reject]) => reject(err));
    }

    renderNotifiers = [];
  }, 0);
}

function revalidate() {
  for (const result of results) {
    const {
      env
    } = result;
    env.begin();
    result.rerender();
    env.commit();
  }
}

const resolver = new RuntimeResolver();
const sharedArtifacts = artifacts();
const context = syntaxCompilationContext(sharedArtifacts, new CompileTimeResolver(resolver));

function dictToReference(dict) {
  const root = createConstRef(dict);
  return Object.keys(dict).reduce((acc, key) => {
    acc[key] = childRefFor(root, key);
    return acc;
  }, {});
}

function getTemplateIterator(ComponentClass, element, envOptions, envDelegate, componentArgs = {}, owner = DEFAULT_OWNER, builderFactory = clientBuilder) {
  const runtime = runtimeContext(envOptions, envDelegate, sharedArtifacts, resolver);
  const builder = builderFactory(runtime.env, {
    element,
    nextSibling: null
  });
  const handle = resolver.registerRoot(ComponentClass);
  const definition = resolver.lookupComponent(handle);
  const compilable = definition.manager.getStaticLayout(definition.state, resolver);
  let dynamicScope;

  if (owner) {
    dynamicScope = new DynamicScopeImpl({
      [OWNER_KEY]: createConstRef(owner)
    });
  }

  return {
    iterator: renderComponent(runtime, builder, context, definition, compilable, dictToReference(componentArgs), dynamicScope),
    env: runtime.env
  };
}

const DESTROYING = new WeakMap();
const DESTROYED = new WeakMap();
function setDestroying(component) {
  DESTROYING.set(component, true);
}
function setDestroyed(component) {
  DESTROYED.set(component, true);
}
/**
 * The `Component` class defines an encapsulated UI element that is rendered to
 * the DOM. A component is made up of a template and, optionally, this component
 * object.
 *
 * ## Defining a Component
 *
 * To define a component, subclass `Component` and add your own properties,
 * methods and lifecycle hooks:
 *
 * ```ts
 * import Component from '@glimmer/component';
 *
 * export default class extends Component {
 * }
 * ```
 *
 * ## Lifecycle Hooks
 *
 * Lifecycle hooks allow you to respond to changes to a component, such as when
 * it gets created, rendered, updated or destroyed. To add a lifecycle hook to a
 * component, implement the hook as a method on your component subclass.
 *
 * For example, to be notified when Glimmer has rendered your component so you
 * can attach a legacy jQuery plugin, implement the `didInsertElement()` method:
 *
 * ```ts
 * import Component from '@glimmer/component';
 *
 * export default class extends Component {
 *   didInsertElement() {
 *     $(this.element).pickadate();
 *   }
 * }
 * ```
 *
 * ## Data for Templates
 *
 * `Component`s have two different kinds of data, or state, that can be
 * displayed in templates:
 *
 * 1. Arguments
 * 2. Properties
 *
 * Arguments are data that is passed in to a component from its parent
 * component. For example, if I have a `UserGreeting` component, I can pass it
 * a name and greeting to use:
 *
 * ```hbs
 * <UserGreeting @name="Ricardo" @greeting="Olá" />
 * ```
 *
 * Inside my `UserGreeting` template, I can access the `@name` and `@greeting`
 * arguments that I've been given:
 *
 * ```hbs
 * {{@greeting}}, {{@name}}!
 * ```
 *
 * Arguments are also available inside my component:
 *
 * ```ts
 * console.log(this.args.greeting); // prints "Olá"
 * ```
 *
 * Properties, on the other hand, are internal to the component and declared in
 * the class. You can use properties to store data that you want to show in the
 * template, or pass to another component as an argument.
 *
 * ```ts
 * import Component from '@glimmer/component';
 *
 * export default class extends Component {
 *   user = {
 *     name: 'Robbie'
 *   }
 * }
 * ```
 *
 * In the above example, we've defined a component with a `user` property that
 * contains an object with its own `name` property.
 *
 * We can render that property in our template:
 *
 * ```hbs
 * Hello, {{user.name}}!
 * ```
 *
 * We can also take that property and pass it as an argument to the
 * `UserGreeting` component we defined above:
 *
 * ```hbs
 * <UserGreeting @greeting="Hello" @name={{user.name}} />
 * ```
 *
 * ## Arguments vs. Properties
 *
 * Remember, arguments are data that was given to your component by its parent
 * component, and properties are data your component has defined for itself.
 *
 * You can tell the difference between arguments and properties in templates
 * because arguments always start with an `@` sign (think "A is for arguments"):
 *
 * ```hbs
 * {{@firstName}}
 * ```
 *
 * We know that `@firstName` came from the parent component, not the current
 * component, because it starts with `@` and is therefore an argument.
 *
 * On the other hand, if we see:
 *
 * ```hbs
 * {{name}}
 * ```
 *
 * We know that `name` is a property on the component. If we want to know where
 * the data is coming from, we can go look at our component class to find out.
 *
 * Inside the component itself, arguments always show up inside the component's
 * `args` property. For example, if `{{@firstName}}` is `Tom` in the template,
 * inside the component `this.args.firstName` would also be `Tom`.
 */


class GlimmerComponent {
  /**
   * Constructs a new component and assigns itself the passed properties. You
   * should not construct new components yourself. Instead, Glimmer will
   * instantiate new components automatically as it renders.
   *
   * @param owner
   * @param args
   */
  constructor(_owner, args) {

    this.args = args;
    DESTROYING.set(this, false);
    DESTROYED.set(this, false);
  }

  get isDestroying() {
    return DESTROYING.get(this) || false;
  }

  get isDestroyed() {
    return DESTROYED.get(this) || false;
  }
  /**
   * Called before the component has been removed from the DOM.
   */


  willDestroy() {} // eslint-disable-line @typescript-eslint/no-empty-function


}

class BaseComponentManager {
  constructor(owner) {
    this.owner = owner;
  }

  createComponent(ComponentClass, args) {

    return new ComponentClass(this.owner, args.named);
  }

  getContext(component) {
    return component;
  }

}

const CAPABILITIES$1 = capabilities('3.13', {
  destructor: true
});
/**
 * This component manager runs in Glimmer.js environments and extends the base component manager to:
 *
 * 1. Implement a lightweight destruction protocol (currently not deferred, like in Ember)
 * 2. Invoke legacy component lifecycle hooks (didInsertElement and didUpdate)
 */

class GlimmerComponentManager extends BaseComponentManager {
  constructor() {
    super(...arguments);
    this.capabilities = CAPABILITIES$1;
  }

  destroyComponent(component) {
    setDestroying(component);
    component.willDestroy();
    setDestroyed(component);
  }

}

class GlimmerComponent$1 extends GlimmerComponent {
  constructor(owner, args) {
    super(owner, args);

    setOwner(this, owner);
  }

}
setComponentManager(owner => {
  return new GlimmerComponentManager(owner);
}, GlimmerComponent$1);

/**
 * @decorator
 *
 * Marks a property as tracked.
 *
 * By default, a component's properties are expected to be static,
 * meaning you are not able to update them and have the template update accordingly.
 * Marking a property as tracked means that when that property changes,
 * a rerender of the component is scheduled so the template is kept up to date.
 *
 * @example
 *
 * ```typescript
 * import Component from '@glimmer/component';
 * import { tracked } from '@glimmer/tracking';
 *
 * export default class MyComponent extends Component {
 *    @tracked
 *    remainingApples = 10
 * }
 * ```
 *
 * When something changes the component's `remainingApples` property, the rerender
 * will be scheduled.
 *
 * @example Computed Properties
 *
 * In the case that you have a getter that depends on other properties, tracked
 * properties accessed within the getter will automatically be tracked for you.
 * That means when any of those dependent tracked properties is changed, a
 * rerender of the component will be scheduled.
 *
 * In the following example we have two properties,
 * `eatenApples`, and `remainingApples`.
 *
 *
 * ```typescript
 * import Component from '@glimmer/component';
 * import { tracked } from '@glimmer/tracking';
 *
 * const totalApples = 100;
 *
 * export default class MyComponent extends Component {
 *    @tracked
 *    eatenApples = 0
 *
 *    get remainingApples() {
 *      return totalApples - this.eatenApples;
 *    }
 *
 *    increment() {
 *      this.eatenApples = this.eatenApples + 1;
 *    }
 *  }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const tracked = (...args) => {
  const [target, key, descriptor] = args; // Error on `@tracked()`, `@tracked(...args)`, and `@tracked get propName()`

  if (descriptor) {
    return descriptorForField(target, key, descriptor);
  } // In TypeScript's implementation, decorators on simple class fields do not
  // receive a descriptor, so we define the property on the target directly.


  Object.defineProperty(target, key, descriptorForField(target, key));
};

function descriptorForField(_target, key, desc) {

  const {
    getter,
    setter
  } = trackedData(key, desc && desc.initializer);
  return {
    enumerable: true,
    configurable: true,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get() {
      return getter(this);
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set(newValue) {
      setter(this, newValue);
    }

  };
}

const SERVICES = Symbol('Services');
class Owner {
  constructor(services) {
    this[SERVICES] = services;
  }

  lookup({
    type,
    name
  }) {

    return this[SERVICES][name];
  }

}

function renderComponent$2(ComponentClass, optionsOrElement) {
  if (optionsOrElement instanceof Element) {
    return renderComponent$1(ComponentClass, optionsOrElement);
  }

  const {
    element,
    args,
    services,
    rehydrate
  } = optionsOrElement;
  const owner = new Owner(services !== null && services !== void 0 ? services : {});
  return renderComponent$1(ComponentClass, {
    element,
    args,
    owner,
    rehydrate
  });
}

var _class, _descriptor, _temp;

var Router = setComponentTemplate({
  id: "eGI6i3zK",
  block: "{\"symbols\":[\"&default\"],\"statements\":[[2,\"\\n   \"],[10,\"div\"],[12],[2,\"\\n      \"],[18,1,null],[2,\"\\n      \"],[10,\"div\"],[14,1,\"glimmer-router-outlet\"],[12],[13],[2,\"\\n   \"],[13]],\"hasEval\":false,\"upvars\":[]}",
  meta: {
    scope: function scope() {
      return {};
    }
  }
}, (_class = (_temp = /*#__PURE__*/function (_Component) {
  _inherits(Router, _Component);

  var _super = _createSuper(Router);

  function Router() {
    var _this;

    _classCallCheck(this, Router);

    _this = _super.apply(this, arguments);

    _initializerDefineProperty(_assertThisInitialized(_this), "registry", _descriptor, _assertThisInitialized(_this));

    window.routerRegistry = [];
    document.addEventListener('click', _this.route.bind(_assertThisInitialized(_this)));
    window.addEventListener('popstate', _this.handlePopState.bind(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Router, [{
    key: "renderPage",
    value: function renderPage(component) {
      var outlet = document.getElementById('glimmer-router-outlet');
      outlet.innerHTML = '';
      renderComponent$2(component, outlet);
    }
  }, {
    key: "route",
    value: function route(ev) {
      if (ev.target.classList.contains('glimmer-link')) {
        ev.preventDefault();
        var url = new URL(ev.target.href);

        var _this$registry$filter = this.registry.filter(function (r) {
          return r.path === url.pathname;
        }),
            _this$registry$filter2 = _slicedToArray(_this$registry$filter, 1),
            route = _this$registry$filter2[0];

        if (route) {
          history.pushState({}, '', url);
          this.renderPage(route.component);
        }
      }
    }
  }, {
    key: "handlePopState",
    value: function handlePopState(event) {
      var _this$registry$filter3 = this.registry.filter(function (r) {
        return r.path === location.pathname;
      }),
          _this$registry$filter4 = _slicedToArray(_this$registry$filter3, 1),
          route = _this$registry$filter4[0];

      if (route) {
        this.renderPage(route.component);
      }
    }
  }, {
    key: "willDestroy",
    value: function willDestroy() {
      document.removeEventListener('click', this.route);
      window.removeEventListener('popstate', this.handlePopState);
    }
  }]);

  return Router;
}(GlimmerComponent$1), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "registry", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return window.routerRegistry;
  }
})), _class));

var Route = /*#__PURE__*/function (_Component) {
  _inherits(Route, _Component);

  var _super = _createSuper(Route);

  function Route() {
    var _this;

    _classCallCheck(this, Route);

    _this = _super.apply(this, arguments);
    var route = {
      path: _this.args.path,
      component: _this.args.component
    };
    window.routerRegistry.push(route);
    return _this;
  }

  return Route;
}(GlimmerComponent$1);

setComponentTemplate({
  id: "n5/Kb5PX",
  block: "{\"symbols\":[\"&default\"],\"statements\":[[18,1,null]],\"hasEval\":false,\"upvars\":[]}",
  meta: {
    scope: function scope() {
      return {};
    }
  }
}, Route);

var Link = /*#__PURE__*/function (_Component) {
  _inherits(Link, _Component);

  var _super = _createSuper(Link);

  function Link() {
    _classCallCheck(this, Link);

    return _super.apply(this, arguments);
  }

  return Link;
}(GlimmerComponent$1);

setComponentTemplate({
  id: "P9btL4fG",
  block: "{\"symbols\":[\"@to\",\"&default\"],\"statements\":[[2,\"\\n  \"],[10,\"a\"],[15,6,[32,1]],[14,0,\"glimmer-link\"],[12],[18,2,null],[13],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}",
  meta: {
    scope: function scope() {
      return {};
    }
  }
}, Link);

export { Link, Route, Router };
