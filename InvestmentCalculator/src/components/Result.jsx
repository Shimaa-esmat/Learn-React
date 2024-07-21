import {calculateInvestmentResults, formatter} from '../util/investment.js'

console.log(calculateInvestmentResults({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 10,
  })[0])
export default function Result({userInput}){
    console.log(userInput)
    return (
        <table>
            <thead>
                <th>Year</th>
                <th>Investment value</th>
                <th>interest (Year)</th>
                <th> Total Interest</th>
                <th>Invested Capital</th>


            </thead>
        </table>
    )
}