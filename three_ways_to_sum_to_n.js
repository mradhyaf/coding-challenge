var sum_to_n_a = function(n) {
  return n === 1 ? 1 : n + sum_to_n_a(n-1);
}; 

var sum_to_n_b = function(n) {
  var result = 0;
  for (var i = 1; i <= n; i++) {
    result += i;
  }

  return result
}; 

var sum_to_n_c = function(n) {
  return n * (n + 1) / 2
};
