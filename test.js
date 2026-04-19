const { add } = require("./script");

function testAddition() {
  if (add(2, 2) !== 4) {
    throw new Error("Test failed ❌");
  }
  console.log("Test passed ✅");
}

testAddition();
