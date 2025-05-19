import { useState } from 'react'

export function GenderSelector() {
    const [gender, setGender] = useState("Male");

    function handleGenderChange(newGender: string) {
        setGender(newGender);
        console.log("Gender changed to:", newGender);
    }

    return (

        <div className="flex space-x-4 mb-5">
            <button className={`px-9 py-2 hover:cursor-pointer rounded-lg border ${gender === "Male" ? "border" : "border-gray-300"
                }`} onClick={() => handleGenderChange("Male")} >Male</button>
            <button className={`px-9 py-2 hover:cursor-pointer rounded-lg border ${gender === "Female" ? "border" : "border-gray-300"
                }`} onClick={() => handleGenderChange("Female")}>Female</button>
        </div>
    )

}