var semver = require('semver');

function check(ver,spec){
    return semver.satisfies(ver,spec);
}
