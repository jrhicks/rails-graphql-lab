import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';

let timeZone = undefined;

class TimeZone extends Store {

  constructor(dispatcher) {
    super(dispatcher);
  }

  getTimeZone() {
    if (!timeZone) {
      console.warn('View requested TimeZone before it was set.');
    } else {
      return timeZone;
    }
  }

  __onDispatch(action) {
    switch (action.type) {
      case 'setTimeZone':
        timeZone = action.data.timeZone;
        this.__emitChange();
        break;
      default:
        break;
    }
  }
}


module.exports = new TimeZone(AppDispatcher);
