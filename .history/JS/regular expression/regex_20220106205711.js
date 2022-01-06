// regular epression : biểu thức chính quy
   // 1. NHỮNG CÁCH KHAI BÁO VỚI REGEX
   const re1 = /hello/;
   const re2 = new RegExp("hello");
   //regex.test(value) -> true or false
   console.log(re1.test('hello world')); //ra true vi re1 co chua chu 'hello'

   //2. ANCHOR : ^ $
      // ^ : string bắt đầu với từ nào đó, nếu nằm bên trong [] : có nghĩa phủ định
      // $ : string kết thúc với từ nào đó
   /hi/.test('hi'); // -> true
   /hi$/.test('hi'); // -> true
   /hi$/.test('welcome to hello'); // -> false
   /^hi/.test('hi welcome to hi'); // -> true
   /^hi/.test('welcome to hi'); // -> false

   //3. RANGES []
      // [a-z] : các kí tự từ a đến z in thường
      // [A-Z] : các kí tự từ A đến Z in Hoa
      // [0-9] : các số từ 0-9
      // [a-z0-9A-Z] : các số từ 0->9 hoặc từ a->z hoặc từ A->Z

   /[a-z]/.test("abcd"); // true
   /[a-z]/.test("A"); // false
   /[A-Z]/.test("Z"); //true
   /[0-9]/.test("14639"); //true vì trong 14369 từng số trong đó đều thuộc các số từ 0 đến 9
   /[^a-z]/.test("abcd"); // false vì có dấu phủ định ^ trong ngoặc vuông
   /[0-9]/.test("abv14639zhg"); //true 

   //4. META CHARACTERS
      //  \d : khớp với số nó sẽ tương đương với [0-9]
      /\d/.test("1234");

      // \D: ngược lại với \d nó sẽ tương đương với [^0-9]
      /\D/.test("123");

      // \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương với [a-z0-9A-Z]
      /\w/.test("_");

      // \s: khớp với các kí tự khoảng trắng: tab, space, newline
      /\s/.test(" ");

      // \S: khớp với các kí tự không phải khoảng trắng
      /\S/.test(" "); //false

      // \n: khớp với newline
      // . : khớp với mọi thứ ngoại trừ \n
      // [^] : khớp với mọi thứ 

   //5. QUANTIFIERS : {n} {n,m} + ? *
      //string.match(regex) 
      //{n} : số lượng nhất định
      //{n,m}: số lượng trong khoảng từ n tới m
      // + : lấy 1 hoặc nhiều kí tự thỏa điều kiện
      const str1= 'welcome to 202221';
      console.log(str1.match(/\d{4}/)[0]);
      console.log(str1.match(/\d+/)[0]);

      const str2 = "color or colour?";
      // ? : có thể có hoặc không có kí tự nào đó
      console.log(str2.match(/colou?r/g)); // => ['color', 'colour']

      //flag
         //g: global : lấy nhiều giá trị
         //i: case insensitive - phân biệt chữ hoa chữ thường
         //m: multipe lines - phân biệt nhiều dòng

      // *: không có hoặc là nhiều
      const str3 = '12345';
      console.log(str3.match(/\d*/g));

   // 6 . GROUP
   /(\d{3})(\w+)/.test("123"); // false

   //7. ESCAPING \ / [ ] ( ) { } ? + * | . ^ $

   //8. BOUNDARIES \