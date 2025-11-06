# print("Hello world !!!")
# a = ("salam")
# b = ("alaikum")
# print(f"{a}  {b}")

# a = 5
# b = 10

# if a < b:
#     print(f"{a} is less than {b}")
# else:
#     print(f"{a} is not less than {b}")

#salam baji qurban

import math


a = float(input("a-nı daxil et: "))
b = float(input("b-ni daxil et: "))
c = float(input("c-ni daxil et: "))


D = b**2 - 4*a*c
print(f"Diskriminant D = {D}")


if D > 0:
    x1 = (-b + math.sqrt(D)) / (2*a)
    x2 = (-b - math.sqrt(D)) / (2*a)
    print(f"İki həll var: x₁ = {x1}, x₂ = {x2}")
elif D == 0:
    x = -b / (2*a)
    print(f"Bir dənə həll var: x = {x}")
else:
    print("Həqiqi kök yoxdur (diskriminant mənfidir).")

