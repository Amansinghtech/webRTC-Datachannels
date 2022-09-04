
with open('generated.txt', 'w') as file:
    for i in range(100000):
        file.write("Hello world")

    file.close()
