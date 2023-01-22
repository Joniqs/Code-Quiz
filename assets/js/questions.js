// Array of Objects that holds our questions and answers.
var questionsArray = [
     {  
        question: "What static method defines setters, getters, and other configurations for a new or existing property on an object?",
        answers: [
            {
                answerText:'Object.defineProperty()', 
                correct: true 
            },
            {
                answerText:'Object["setProperty"]()',
                correct: false
            },
            {
                answerText:'Property.declare()',
                correct: false
            },
            {
                answerText:'Object.prototype.Property()',
                correct: false
            }
     ]},
        {   
        question: "What is the method to test whether a provided value is a double precision number?",
        answers: [
            {
                answerText:'Number.SafeInteger()',
                correct: false 
            },
            {
                answerText:'Number.isIEEEInteger()',
                correct: false
            },
            {
                answerText:'Number.isSafeInteger()',
                correct: true
            },
            {
                answerText:'Number.isInteger()',
                correct: false
            }
        ]},
        {   
        question: "What is a safe alternative to using eval()?",
        answers: [
            {
                answerText:'window.Function()',
                correct: true 
            },
            {
                answerText:'window.Evaluate()', 
                correct: false
            },
            {
                answerText:'window.Search()', 
                correct: false
            },
            {
                answerText:'window.Check()',
                correct: false
            }
        ]
    },
    {   
        question: "What type of argument does Array.from() take to create a new array?",
        answers: [
            {
                answerText:'An array',
                correct: false
            },
            {
                answerText:'Any object', 
                correct: false
            },
            {
                answerText:'A string', 
                correct: false
            },
            {
                answerText:'An array-like or iterable object',
                correct: true
            }
        ]
    },
    {   
        question: "When comparing two strings with the less than or the greater than operator, what does the `console.log` output return?",
        answers: [
            {
                answerText:'false',
                correct: false
            },
            {
                answerText:'NaN', 
                correct: false
            },
            {
                answerText:'Error', 
                correct: false
            },
            {
                answerText:'true',
                correct: true
            }
        ]
    },
    {   
        question: "What does the yield statement in a generator do?",
        answers: [
            {
                answerText:'Throws an exception from the generator',
                correct: false
            },
            {
                answerText:'Returns the final value after done equals true', 
                correct: false
            },
            {
                answerText:'Pauses and returns the generator`s new value', 
                correct: true
            },
            {
                answerText:'Returns the initiated generator one time',
                correct: false
            }
        ]
    },
    {   
        question: "When would the Number.isInteger() method return true?",
        answers: [
            {
                answerText:'Number.isInteger(0 / 2)',
                correct: true
            },
            {
                answerText:'Number.isInteger(0 / 0)', 
                correct: false
            },
            {
                answerText:'Number.isInteger(2 / 0) ', 
                correct: false
            },
            {
                answerText:'Number.isInteger(-2.1 / 2)',
                correct: false
            }
        ]
    },
    {   
        question: "Which Javascript RegExp literal pattern has the global search flag?",
        answers: [
            {
                answerText:'const re = /g/w+\s',
                correct: false
            },
            {
                answerText:'const re = /w+\s/g', 
                correct: true
            },
            {
                answerText:'const re = /w+\s/.global()', 
                correct: false
            },
            {
                answerText:'const re = /w+\s/i',
                correct: false
            }
        ]
    },
    {   
        question: "You are working on a data analysis script for a client. The client wants to store the result of some calculation as a variable named mice. The calculation itself involves squaring a variable named cats. How might you write this?",
        answers: [
            {
                answerText:'mice = cats ^ 2',
                correct: false
            },
            {
                answerText:'mice = cats * 2', 
                correct: false
            },
            {
                answerText:'mice == cats ** 2', 
                correct: false
            },
            {
                answerText:'mice = cats ** 2',
                correct: true
            }
        ]
    },
    {   
        question: "What does SQL stand for",
        answers: [
            {
                answerText:'Stylish Question Language',
                correct: false
            },
            {
                answerText:'Stylesheet Query Language', 
                correct: false
            },
            {
                answerText:'Statement Question Language', 
                correct: false
            },
            {
                answerText:'Structured Query Language',
                correct: true
            }
        ]
    }                  
];