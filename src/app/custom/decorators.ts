export function AutoUnsubscribe(blackList = []) {
  return function(constructor) {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function() {
      Object.keys(this)
        .filter(prop => !blackList.includes(prop))
        .forEach(prop => {
          const property = this[prop];
          if (property && typeof property.unsubscribe === 'function') {
            property.unsubscribe();
          }
        });
      original &&
        typeof original === 'function' &&
        original.apply(this, arguments);
    };
  };
}
