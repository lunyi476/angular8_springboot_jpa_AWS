function removeProperty(obj, prop) {
    if (obj[prop] != null) {
        delete obj[prop];
        return true;
    }
    return false;
  }