var firstName = 'Utkarsh';
var lastName = 'Asthana';
// camelCase (standard for variables & functions)
function getUserData() { return { firstName, lastName }; }

// snake_case (sometimes used in JS for constants or Python-style)
var first_name = 'Jane';
var last_name = 'Smith';
function get_user_data() { return { first_name, last_name }; }

// PascalCase (for classes / constructors)
class UserProfile {
  constructor(name) { this.name = name; }
}
const myProfile = new UserProfile('Alice');

// UPPER_SNAKE_CASE (for constants / environment variables)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_TIMEOUT_MS = 5000;

// kebab-case (NOT valid in JS — shown as string keys only)
let config = { 'api-key': 'abc123', 'db-host': 'localhost' };

// mixed / prefix conventions
let _isLoading = true;       // underscore prefix = "private" convention
let $domElement = null;      // dollar prefix = jQuery / DOM convention

console.log(getUserData());
console.log(get_user_data());
console.log(myProfile);
console.log(MAX_RETRY_COUNT, API_BASE_URL, DEFAULT_TIMEOUT_MS);
console.log(config['api-key']);
console.log(_isLoading, $domElement);
