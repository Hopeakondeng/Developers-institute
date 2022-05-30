#Exercise 1
'''class Cat:
    def __init__(self, cat_name, cat_age):
        print(f'Your new cat is {cat_name} and it is {cat_age} years old')
        self.name = cat_name
        self.age = cat_age

    



cat1 = Cat('Tom', 6) 
cat2 = Cat('Tim', 8)
cat3 = Cat('Tam', 10)

def oldestcat():
    if cat1.age > cat2.age and cat1.age > cat3.age:
        return cat1
    if cat2.age > cat3.age and cat2.age > cat3.age:
        return cat2
    if cat3.age > cat1.age and cat3.age > cat2.age:
        return cat3


oldestcatname = oldestcat().name
oldestcatage = oldestcat().age
print(f'The oldest cat is {oldestcatname} and it is {oldestcatage} years old')'''
    

#Exercise 2
class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        x = (self.height * 2)
        print(f'{self.name} jumps {x}cm high')



dog1 = Dog('Ben', 20)
dog1.jump()
dog1.bark()

        
    