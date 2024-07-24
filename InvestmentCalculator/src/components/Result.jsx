import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Result({userInput}){
    const resultData = calculateInvestmentResults(userInput)
    if(resultData.length === 0){
        <p className='center'>Invalid Data</p>
    }
    const initialInvestment = 
    resultData[0].valueEndOfYear - 
    resultData[0].interest - 
    resultData[0].annualInvestment;
    console.log(resultData)
    return (
        <table>  
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>interest (Year)</th>
                <th> Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {resultData.map(yearData => 
                {   
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest
                    
                return (
                <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)} </td>
                <td> {formatter.format(yearData.interest)} </td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>

                </tr>)
                })}  
            </tbody>
        </table>
    )
}