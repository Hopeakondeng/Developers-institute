#Exercise 1
'''
keys = ['Ten', 'Twenty', 'Thirty']
valuess = [10, 20, 30]

newdict = dict(zip(keys,valuess))

print(newdict)

'''
#Exercise 2




#Exercise 3

brand = {
    'name': 'Zara', 
    'creation_date' : 1975, 
    'creator_name': 'Amancio Ortega Gaona', 
    'type_of_clothes': ['men', 'women', 'children', 'home'], 
    'international_competitors': ['Gap', 'H&M', 'Benetton'], 
    'number_stores': 7000, 
     'major_color':{
           ' France': 'blue', 
            'Spain': 'red', 
            'US': ['pink', 'green']
    } 
    
}

#1
brand['number_stores'] = 2

#2
a = brand['type_of_clothes'][0]
b = brand['type_of_clothes'][1]
c = brand['type_of_clothes'][2]
d = brand['type_of_clothes'][3]

print(f'Zara creates clothes for both {a}, and {b} to wear, as well as {c} and also stuff you can wear at {d}' )

#3
brand['country_creation'] = 'Spain'

#4
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

#5
brand.pop('creation_date')
#6
print(brand['international_competitors'][3])

#7
brand['major_color']['US']

#8 


