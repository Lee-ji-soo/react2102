str = ["   + — + - + -  ","   + — + - +   ","   + — + - + -   ", "   + - + - + - +   "]

for i in str:
  print(i.strip().replace(" ","").replace("+","1").replace("-","0"))

