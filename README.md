# simple-calculator

Calculadora simples como base para estudar:

- Deploy (Heroku)
- CI/CD

---
### Rotas
#### POST | https://calc-node.herokuapp.com/calc

> Json
```
{
  "operador1":"70000",
  "operador2":"12",
  "operacao": "/"
}
```

>Response 
```
{
  "operador1": "70000",
  "operador2": "12",
  "operacao": "/",
  "resultado": 5833.333333333333
}
```

---