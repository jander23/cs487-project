puts "Full Name?"
$stdout.flush #
name = gets.chomp
puts "Short Name?"
$stdout.flush #
short_name = gets.chomp
puts "X1?"
$stdout.flush #
X1 = gets.chomp
puts "Y1?"
$stdout.flush #
Y1 = gets.chomp
puts "X2?"
$stdout.flush #
X2 = gets.chomp
puts "Y2?"
$stdout.flush #
Y2 = gets.chomp

area = "<area alt=\"#{name}\" title=\"#{name}\" href=\"building/#{short_name}.html\" data-toggle=\"tooltip\" data-placement=\"bottom\" shape=\"rect\" coords=\"#{X1},#{Y1},#{X2},#{Y2}\" style=\"outline:none;\" target=\"_self\">"

open('areas.txt', 'a') do |f|
  f.puts area
end
