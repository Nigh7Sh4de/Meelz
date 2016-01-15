Array.prototype.findById = function (ID) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].id == ID) {
            return this[i];
        }
    }
    return null;
};

Array.prototype.generateId = function () {
    var id = 0;
    this.forEach(function (e) {
        if (e.id <= id) id++;
    });
    return id;
};