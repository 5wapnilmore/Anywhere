<html>
<head>
    <script>

        let x, num1, num2, ans;
        x = prompt("please enter operator (+,-,*,/)");
        num1 = prompt("please enter first number ");
        num2 = prompt("please enter second number ");

        switch (x) {
            case '+':
                ans = num1 + num2;
                document.write("addition = " + ans);
                break;
            case '-':
                ans = num1 - num2;
                document.write("sub = " + ans);
                break;
            case '*':
                ans = num1 * num2;
                document.write("malt = " + ans);
                break;
            case '/':
                ans = num1 / num2;
                document.write("div = " + ans);
                break;
            default:
                document.write("invalid operator");
        }

    </script>
</head>
<body>
</body>
</html>
