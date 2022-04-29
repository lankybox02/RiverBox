console.log('%c RiverBox!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
console.log("%cWelcome to the RiverBox console page :)", "margin:0;font-size:2.5em;margin-top:-.6em;color:#fff;text-shadow:0 0 .05em #fff,0 0 .2em #fe05e1,0 0 .3em #fe05e1;")
console.log("%cIf you do not know what you are doing here, leave! It's very likely that if someone told you to paste something here, they're trying to take over your account!", "font-style:italic")
console.log("%cRun selectCharacter() to select your character!", "background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);color: white;")

let u, c, d;

function selectCharacter() {
  console.log("%cType U to be a user!", "font-weight:bold;color:red")
  console.log("%cType C to be a contributor!", "font-weight:bold;color:yellow")
  console.log("%cType D to be a developer!", "font-weight:bold;color:blue")
  
  u = "Welcome, dear user!";
  c = "Welcome, dear contributor!";
  d = "Welcome, dear developer!";
}
