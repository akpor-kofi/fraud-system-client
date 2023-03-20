export const CreditCardField = (): JSX.Element => {
    return (
        <div className="flex-between">
            <div className="card-number flex-vertical-center flex-fill">
                <div className="card-number-field flex-vertical-center flex-fill">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px"
                         height="24px">
                        <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
                        <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
                        <path fill="#ff3d00"
                              d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"/>
                    </svg>


                    <input className="numbers" type="number" min="1" max="9999" placeholder="0000" />
                    <input className="numbers" type="number" placeholder="0000" />
                    <input className="numbers" type="number" placeholder="0000" />
                    <input className="numbers" type="number" placeholder="0000"
                           data-bound="carddigits_mock" data-def="0000" />
                </div>
                <i className="ai-circle-check-fill size-lg f-main-color"></i>
            </div>
        </div>
    )
}