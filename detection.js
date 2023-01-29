"use strict";
exports.__esModule = true;
function detedctType(val) {
    if (typeof val === "string") {
        val.toLowerCase();
    }
    else {
        return val + 2;
    }
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
