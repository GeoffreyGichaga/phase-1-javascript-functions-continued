// code your solution here

// function greetings(morning="hello1",evening="hello2")
// {
//     console.log(`in the morning ${morning} Jeff and in the eveing ${evening} `);
// }
// greetings()
// greetings("hello4","hello5")

// (function()
// {
//     console.log("HELLO JEFF");
// });

// const fn = function()
// {
//     console.log("Hello TJ");
// }

function saturdayFun(activity="roller-skate")
{
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity="go to the office")
{
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(flair="*")
{
    // let result = wrapAdjective('*')
    let emphatic = "a hard worker"
    return function innerFunction(name="special"){

        return `You are ${flair} ${emphatic} ${flair}!`



    }
    

} 
wrapAdjective()