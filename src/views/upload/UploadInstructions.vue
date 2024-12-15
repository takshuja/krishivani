<template class="bg-[#ccc]">
    <div class="my-8 px-8 lg:w-3/4 lg:mx-auto">
        <!-- Instructions Tab -->
        <div class="instructions bg-black text-white font-bold px-4 py-2 rounded-3xl lg:text-3xl">
            INSTRUCTIONS TO THE AUTHORS
        </div>
        <div class="text-start my-8 mx-6 lg:text-xl lg:my-12">
            <ol class="list-decimal font-medium">
                <li>Article should have less than 20 percent plagiarism.</li>
                <li>The status of submitted article can be viewed at article tracking page.</li>
                <li>Article must be less than <b>5MB</b> size and not exceed <b>8</b> pages.</li>
                <li>Articles should be submitted only through the online submission portal.</li>
                <li>Article must include the <b>Title, Name of the authors with affiliation and e-mail ID.</b></li>
                <li>Acceptance of articles will be communicated to corresponding author through email
                    <i>krishivani@example.com</i>
                </li>
                <li>Authors have to pay a sum of <b>Rs. 50/-</b> as Article processing charge in case of acceptance of
                    article for publication. Payment should be done within two days of intimation of article acceptance.
                </li>
            </ol>
        </div>

        <!-- Submission Format -->
        <div class="format flex flex-wrap justify-between gap-8 items-center bg-white text-start p-8 lg:text-xl ">
            <div class="">
                <b>Format of Article:</b>
                <ul>
                    <li><b>Font: </b>Times New Roman</li>
                    <li><b>Font size: </b>12</li>
                    <li><b>Spacing: </b>1.15</li>
                    <li><b>Include table(s) and figure(s) wherever neccessary</b></li>
                </ul>
            </div>
            <div class="upload-btn text-white lg:text-xl font-bold hover:cursor-pointer">
                <button @click="$router.push({ name: 'upload' })"
                    class="bg-[#A59A49] px-6 py-1 rounded-3xl transition duration-300 ease-in-out transform hover:scale-105  ">
                    <span class="fa-solid fa-arrow-up-from-bracket border  rounded-full p-[0.5rem] px-[0.6rem]"></span>
                    <label class="px-4">UPLOAD ARTICLE</label>
                </button>
            </div>
        </div>

        <!-- Payment Details -->
        <div
            class="format flex flex-wrap lg:justify-between gap-8 justify-center items-center bg-white text-start my-16 p-8 lg:text-xl ">
            <div class="">
                <b>PAYMENT DETAILS:</b>
                <ul>
                    <li><b>UPI ID: </b>example@okabc</li>
                    <li><b>Account NO.: </b>1130101035836</li>
                    <li><b>NAME OF THE ACCOUNT HOLDER: </b>JOHN DOE</li>
                    <li><b>BANK NAME: </b>BANK</li>
                    <li><b>BRANCH: </b>BRANCH NAME</li>
                    <li><b>IFSC CODE:</b>ABCIN001234</li>
                </ul>
            </div>
            <div class="text-center w-40 h-40 border border-black lg:mr-16">
                <div class="flex items-center justify-center h-full">QR CODE <br> HERE</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView(
                    { behavior: 'smooth' }
                )
            }
        }
    }
}
</script>

<style lang="css" scoped>
.format {
    box-shadow: 4px 4px 10px #ccc, -4px -4px 10px #ccc;
    border-radius: 2.5rem;

}
</style>