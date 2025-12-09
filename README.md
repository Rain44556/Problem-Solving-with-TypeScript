## What are some differences between interfaces and types in TypeScript?

**Ans:** অবজেক্টের shape বা structure বুঝার জন্য দুই ধরনের টুল রয়েছে। ১. Type alias এবং ২. interfaces।

এদের মধ্যে কিছু ডিফারেন্ট হলো-

* ইন্টারফেস মূলত অবজেক্টের shape ডিফাইন করতে ব্যবহার হয়ে থাকে। আর অন্যদিকে টাইপ বেশি versatile। এটি অবজেক্ট টাইপসহ প্রিমিটিভ যেমন- (স্ট্রিং, নাম্বার, বুলিয়ান) Union, tuple, mapped সহ প্রায় যেকোনো ধরনের টাইপকে নাম দিতে পারে।

* একই নামে একাধিক ইন্টারফেস ডিক্লার করা সম্ভব। typescript এর কম্পাইলার সেগুলোকে একসাথে একটা ইন্টারফেস তৈরি করে। যেটা টাইপের ক্ষেত্রে প্রযোজ্য নয়। একই নামের আবার টাইপ ডিক্লার করলে কম্পাইলার এরর দিবে। অর্থাৎ টাইপ শুধু একবারই ডিক্লার করা যায়।

* ইন্টারফেসে extends ব্যবহার করে অন্য interface থেকে inheritance নেওয়া যায়। আর অন্যদিকে টাইপকে সরাসরি extends করা যায় না, তবে intersection operator (&) ব্যবহার করে অন্য টাইপের সাথে combine করা যায়।

* ক্লাসগুলো implements কী-ওয়ার্ড ব্যবহার করে একটা ইন্টারফেস ইমপ্লিমেন্ট করতে পারে। আর অন্যদিকে সরাসরি type alias ইমপ্লিমেন্ট করতে পারে না। যদি না সেটা একটা অবজেক্ট টাইপ হয়।


## Provide an example of using union and intersection types in TypeScript

**Union Type**- একটা ভ্যারিয়েবল বা প্যারামিটার একাধিক টাইপের মধ্যে যেকোনো একটা টাইপ গ্রহণ করাই হলো ইউনিয়ন টাইপ। এটি ( | ) অপারেটর দিয়ে প্রকাশ করে।

**Example:**
```ts
type StudentStatus = "active" | "suspended";

const getStudentMessage = (status: StudentStatus) => {
    if (status === "active") { 
        return "Student is allowed to attend class.";
    } else if (status === "suspended") {
        return "Student is temporarily restricted.";
    } else {
        return "Status unknown.";
    }
};
```


**Intersaction type** - অনেকগুলা টাইপ বা ইন্টারফেসের characteristic একসাথে করে একটি নতুন টাইপ তৈরি করে। এটিকে ( & ) অপারেটর দ্বারা প্রকাশ করা হয়।

**Example:**
```ts
type Developer = {
    id: string;
    name: string;
    skills: string[];
};

type TeamLead = {
    level: string;
    teamCount: number;
};

type LeadDeveloper = Developer & TeamLead;

const MoklesVai: LeadDeveloper = {
    id: "DEV102",
    name: "Mokles Vai",
    skills: ["TypeScript", "Node.js"],
    level: "Senior",
    teamCount: 8
};
```