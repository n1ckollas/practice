
import sys

# Output formatting

s = 'Some string'
print(str(s))

print(repr(s))
print(str(1/7))

x = 100 * 2.34
y = 200 * 200
s = 'The value of x is ' + repr(x) + ' and the value of y is ' + repr(y) + '...'
print(s)
f = " The value of x is {} and the value of y is {} ...".format(repr(x), repr(y))

print(f)
hello = "Hello world \n"
print(hello)
print(repr(hello))
print(str(hello))

print(repr((x, y, ('spam', 'egs'))))

print((x, y, ('spam', 'egs')))


for x in range(1, 11):
    print(repr(x).rjust(2), repr(x * x).rjust(3), end=' ')

    print(repr(x*x*x).rjust(4))

for x in range(1, 11):
    print('{0:2d} {1:3d} {2:4d}'.format(x, x*x, x*x*x))


print("the story of {2!a}, and {0!r} but not {1!s}".format('Nick', "John", 'Dandy'))

table = {'nick': 347, 'Jack':567, 'Brosky': 9877,}


for name, phone in table.items():
    print("{0:10} ==> {1:10}".format(name, phone))

#reading files

with open('test.txt', 'r+') as f:
    char_num = 0
    print(f.tell())

    for line in f:
        print(line, end=' ... ')
        char_num += len(line.strip('\n'))
    print(f.tell())

    f.write('Total # of characters in a file is : %s' % char_num + '\n')
    value = ('the answer', 42)



f.close()