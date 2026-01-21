import React from 'react'

const Warning = () => {
    return (
        <div className="px-4 lg:px-8 mb-4">
            <div className="bg-orange-50 border border-orange-100 rounded-md p-1 flex items-start gap-1 lg:max-w-5xl mx-auto">

                <div className="MuiAlert-root MuiAlert-standardWarning">

                    <div className="MuiAlert-icon">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>
                    </div>

                    <div className="MuiAlert-message">
                        <span className="font-semibold text-[1rem] block mb-1">Warning</span>
                        <p className="text-[##623f04] ">
                            This is a machine-issued visa permit. In order to check the validity of the visa permit,
                            please check the followings against the presented travel document:
                            <br />
                            <strong> <span></span>-Document Type</strong>, <br /> <strong>-Document Number</strong>,<br /> <strong>-Country</strong>.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Warning;
