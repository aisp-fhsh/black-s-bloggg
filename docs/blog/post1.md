# 鍾小黑的 證照征戰之旅..
## variable

- 型態不同無法相加? 改就好了!

```python
num = 30
print(f"Hello" + str(x)")
```

- 程式語言預設型態為字串
- `eval ( )` → 輸入甚麼就是什麼! (type) → 會存在RCE漏洞!!!不要使用

### separator(sep) → 分隔符

- 字和字之間的分隔

```python
x = 10
y = 5
print(x,y,seq="!")
#output = 10!5

```

### TQC+_108.py

```python
R = eval(input())
r = R / 2 
A = (r**2) * 3.1415
print(f"{R:<10d}") #向左靠10字符  ">"為向右靠
print(f"{r:<10.2f}") #10"d"為R的型態 
print(f"{A:<10.4f}") #這是"f" float
```

- 若不加視為預設(我輸入的)

## format

1. 格式化字串(formatted string literals)  →  “%d” 、”%f”
2. 字串的format( )  →  print(“{ } { }”.format(1,2))  / print(“{ first} {second }”.format(first = 1,second = 2)) (寫相反也沒差)
3. f-string  →  print(f”{ first }”) (變數都用好 寫給自己看的)

```python
fs ="a = {a}, b = {b}"
a,b = input().split()
obj = {"a":a, "b":b}

```

### 三元運算子( **ternary operator)**

if else好難 怎麼辦?????

更簡潔的寫法!

### TQC+_110.py

```python
a = eval(input())
b = eval(input())
c = eval(input())
if a>=60 and a<100:
    print("1")
else :
    print("0")
num = (b+1) / 10
print(f"{num:.2f}")
if a>=c:
    print(a)
else:
    print(c)
```

三元三元~

```python
a = eval(input())
b = eval(input())
c = eval(input())
print("1" if a>=60 and a < 100 else "b")  #if true 輸出左邊 else 輸出右邊
num = (b+1) / 10
print(f"{num:.2f}")
print(a if a>c else c)
```

## if statement

- “ : “ 代表一個區塊 →{｝是給字典使用

## encode &  decode

ASCII 

- `ord( )` → 字母轉數字
- `chr( )` → 數字轉字母

## data structure

- 資料結構由0開始理由 → 位移量
- Py字串只能索引 不能改變! (only read)

> 今日作業 : Vitepress 上架、python奇數題
>