'use client';

export default function Form(){
    return(
        <div className="border rounded-xl">
            <form>
                <div className="p-2">
                    <label>First Name: </label>
                    <input type="text" placeholder="Enter your first name..." className="border" />
                </div>
                <div className="p-2">
                    <label>Last Name: </label>
                    <input type="text" placeholder="Enter your last name..." className="border" />
                </div>
                <div className="p-2">
                    <label>Email: </label>
                    <input type="email" placeholder="Enter your email address..." className="border" />
                </div>
                <div className="py-2 px-50">
                    <button className="border rounded-xl bg-green-300 p-1 px-10" onClick={() => alert('You submitted a form!')}>Submit</button>
                </div>
            </form>
        </div>
    );
}