import React from 'react';

const ContactForm: React.FC<Props> = (props) => {
    const inputClasses = "shadow p-3 dark:bg-opacity-30 dark:bg-gray-900 rounded-lg";
    return <form action={props.actionUrl} method="POST"
        className="lg:w-2/3 grid grid-cols-1 overflow-hidden lg:!grid-cols-2 gap-4 items-start justify-start p-12 bg-opacity-20 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <input name="name" className={`lg:col-start-1 lg:col-end-2  ${inputClasses}`} type="text" placeholder={props.nameText} />
        <input name="email" className={`lg:col-start-2 lg:col-end-3 ${inputClasses}`} type="text" placeholder={props.emailText} />
        <input name="subject" className={`lg:col-start-1 lg:col-end-3 ${inputClasses}`} type="text" placeholder={props.subjectText} />
        <textarea name="message" className={`lg:col-start-1 lg:col-end-3 ${inputClasses}`} placeholder={props.messageText} cols={40} rows={5} />
        <button name="submit" className="bg-primary-color font-bold py-2 px-4 rounded-lg text-gray-100" type="submit">{props.buttonText}</button>
    </form>
}


export interface Props {
    nameText: string,
    emailText: string,
    subjectText: string,
    messageText: string,
    buttonText: string,
    actionUrl: string
}

export default ContactForm;