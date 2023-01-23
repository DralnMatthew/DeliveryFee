export default function calculateFee(value_, distance_, amount_, time_) {
  let value = parseFloat(value_)
  let distance = parseFloat(distance_)
  const amount = parseInt(amount_)

  if (value >= 100) return 0;

  let price = 2;
  if (value < 10) price += 10 - value;

  if (distance > 1000) {
    distance -= 1000;
    while (distance > 0) {
      distance -= 500;
      price += 1
    }
  }

  if (amount >= 5) {
    price += (amount - 4) * 0.5;
  }
  if (amount > 12) {
    price += 1.2;
  }

  let time = new Date(time_)

  const weekday = time.getDay()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  if (weekday === 5 && ((hour >= 15 && hour <= 18) || (hour === 19 && minute === 0 && second === 0)))
    price *= 1.2

  if (price > 15) price = 15;

  return price;
}