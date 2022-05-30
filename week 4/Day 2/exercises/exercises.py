#exercise 1
'''
my_fav_numbers = {2,4,6,8}
my_fav_numbers.add (10)
my_fav_numbers.add (12)
my_fav_numbers.remove(10)
my_fav_numbers.remove(6)
friend_fav_number = {1,3,5,7}

our_fav_numbers = my_fav_numbers|friend_fav_number

print(our_fav_numbers)
'''

#exercise 2
#No, you can't because tuples are immutable

#exercise 3
'''
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
basket.remove('Blueberries')
basket.append('Kiwi')
basket.insert(0, 'Apples')
basket.count('Apples')
basket.clear()
print(basket)
'''

#Exercise 4
# A float is a decimal number while an integer is a whole number
#We can use th call Numpy function

#exercise 5
#for x in range(21):
#   print(x)
'''
y = range(21)
for x in y:
    if x % 2 == 0:
        print(x)
'''

#exercise 6
'''
p = input('What is your name?')

while p != 'Hope':
    p = input('What is your name?')
'''
#exercise 7
'''
p = input('What are your favourite fruits? Please seaparate each fruit with a space.')

p1 = p.split()

p2 = input('Pick any fruits')

if p2 in p1:
    print('You chose one of your favorite fruits! Enjoy!')
else:
        print('You chose a new fruit. I hope you enjoy')
'''