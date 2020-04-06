from math import floor, ceil

number = 3
binarynumber=""
if (number!=0):
    while (number>=1):
        if (number %2==0):
            binarynumber=binarynumber+"0"
            number=number/2
        else:
            binarynumber=binarynumber+"1"
            number=(number-1)/2

else:
    binarynumber="0"
print(binarynumber)
bn = list(binarynumber)
bn.reverse()
rvrsd = "".join(bn)
strings = rvrsd.split("0")
length = 0
for s in strings:
    if len(s) > length:
        length = len(s)

print(length)


