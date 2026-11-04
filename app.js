// Interactive Goal Tracker Logic
const targetAmount = 9.00;
let currentEarnings = 0.00;

function updateProgress(amount) {
  currentEarnings += amount;
  const percentage = Math.min((currentEarnings / targetAmount) * 100, 100);
  console.log(`Current Progress: ${percentage.toFixed(1)}% ($${currentEarnings.toFixed(2)} / $${targetAmount})`);
  
  if (currentEarnings >= targetAmount) {
    console.log("🎉 Goal Reached! Birthday gift secured.");
  }
}

// Simulate earnings update sequence
updateProgress(1.50);
updateProgress(2.50);
updateProgress(5.00);