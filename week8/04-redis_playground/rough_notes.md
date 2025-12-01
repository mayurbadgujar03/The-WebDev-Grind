# Lists push pop operations

```
lpush messages hey

rpush messages bye

lpop messages

rpop messages

llen messages

lrange messages 0 -1
```

# Blocking commands

```
blpop messages 10
```

# Sets

```
sadd ip 1

srem ip 3

sismember ip 1

```

# hashMap

---

```
zadd score 1 max

zrange score 0 -1

zrevrange score 0 -1

```

# redis streams

```
xadd
xread
xrange
xlen
```