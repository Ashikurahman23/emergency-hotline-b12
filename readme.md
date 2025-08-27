- 🌐 **Answer the following questions:**

- Question 01: What is the difference between getElementById,
  getElementsByClassName, and querySelector / querySelectorAll?
- Answer: getElementById() আমাদেরকে শুধুমাত্র একটি এলিমেন্ট দেয়।
  getElementsByClassName() - আমাদেরকে ঐ ক্লাসনেমের আন্ডারে যতগুলো এলিমেন্ট আছে
  সবগুলোকে একটি এ্যারের মতো করে html Collection দেয়।  
  querySelector() - কুয়েরি সিলেক্টর এর মাধ্যমে আমরা tag, id, class যে কোন
  এলিমেন্টের নাম ধরে ডাকতে পারি, কিন্তু সমস্যা হচ্ছে সে আমাকে শুধুমাত্র ১ম
  এলিমেন্টটাই দিবে, যদি একই ট্যাগ, ক্লাস, আইডি নামে একাধিক এলিমেন্টও থাকে তারপরও
  সে শুধুমাত্র ১ম এলিমেন্টটিকে দিবে। querySelectorAll() - কুয়েরি সিলেক্টর এর
  মাধ্যমেও আমরা tag, id, class যে কোন এলিমেন্টের নাম ধরে ডাকতে পারি, সে আমাদেরকে
  সবগুলো এলিমেন্ট একত্র করে একটা nodelist দিবে।

- Question 02: How do you create and insert a new element into the DOM? -Answer:
  প্রথমে একটি variable এ নতুন এলিমেন্ট তৈরি করবো, এরপর ঐ variable এ innerHTML বা
  innerText যোগ করবো, এরপর যেই এলিমেন্ট এর ভিতর সেটা দেখাতে চাই ঐ এলিমেন্টকে
  ধরে append করে দিবো। উদাহরণ: const newElem = document.createElement('ul');
  newElem.innerHTML =
  `<li>First Item</li> <li>Second Item</li> <li>Third Item</li>`
  document.body.appendChild(newElem);

- Question 03: What is Event Bubbling and how does it work? -Answer: Event
  Bubbling হলো এমন এক প্রক্রিয়া - যখন কোন child element এ কোনো ইভেন্ট ট্রিগার হয়
  তখন ইভেন্ট শুধু ঐ চাইল্ড এ থেমে থাকে না, বরং সে তার প্যারেন্ট খুজতে খুজতে
  ডকুমেন্ট পর্যন্ত চলে যায় এবং সেখানেও যদি কোনো ইভেন্ট থাকে সেটাও এক্সিকিউট করে
  দেয়।

- Question 04: What is Event Delegation in JavaScript? Why is it useful?
  -Answer: event Delegation হলো এমন একটি কৌশল যেখানে আমরা একটি পেরেন্ট
  এলিমেন্টের প্রতিটি চাইল্ডকে আলাদা আলাদা ইভেন্ট লিসেনার না চালিয়ে শুধুমাত্র
  পেরেন্ট এলিমেন্টে লিসেনার চালায় এবং event bubbling এর মাধ্যমে চেক করি যে কোন
  চাইল্ড এলিমেন্ট ট্রিগার হচ্ছে। এর অন্যতম সুবিধা হলো চাইল্ডগুলোতে বার বার
  লিসেনার যোগ করা লাগে না, কোড ছোট হয়।

- Question 05: What is the difference between preventDefault() and
  stopPropagation() methods?

-Answer: preventDefault() হলো ডেফল্ট বিহেভিয়র বন্ধ করা, কারণ যখন আমরা কোনো ফরম
সাবমিট করি তখন দেখা যায় যে ব্রাউজার অটো রিলোড হয়ে থাকে, সেক্ষেত্রে অবশ্যই এটি
বন্ধ করার জন্য preventDefault() ব্যবহার করা হয়। আমরা জানি Event Bubbling চাইল্ডে
ইভেন্ট ট্রিগার হলেও সে উপরের দিকে অর্থাৎ তার পেরেন্ট এর দিকে উঠতে থাকে এবং
পেরেন্ট এর ইভেন্ট ও এক্সিকিউট করে দেয়, আর সেটি বন্ধ করতে হলে stopPropagation()
মেথডস ব্যবহার করতে হয়।

- 🌐 **Live Link** https://ashikurahman23.github.io/emergency-hotline-b12/
