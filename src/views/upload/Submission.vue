<template>


    <div class="my-8 px-8 lg:w-3/4 lg:mx-auto" id="#submission">
        <div class="instructions bg-[#78AD2C] text-white font-bold px-4 py-5 rounded-3xl lg:text-3xl">
            KRISHIVANI - ARTICLE SUBMISSION
        </div>

        <!-- Upload Form -->
        <form class="bg-white rounded-3xl my-8 p-6 text-start" @submit.prevent="validateAndSubmit">
            <label class="text-start text-sm">Author is requested to submit form carefully without any mistakes.</label>

            <!-- Title -->
            <div class="flex flex-col my-8 w-10/12">
                <label class="font-medium">Title of the Article*</label>
                <input type="text" v-model="formData.title" class="my-2 border rounded-md py-1 px-2">
                <p v-if="errors.titleError" class="error">{{ errors.titleError }}</p>
            </div>

            <!-- Name of Discipline (Dropdown) -->
            <DropdownMenu />

            <!-- Name of the Author -->
            <div class="flex flex-col my-8 w-1/2">
                <label class="font-medium">Name of the Corresponding Author*</label>
                <input type="text" v-model="formData.authorName" class="my-2 border rounded-md py-1 px-2">
                <p v-if="errors.nameError" class="error">{{ errors.nameError }}</p>
            </div>

            <!-- Email -->
            <div class="flex flex-col my-8">
                <label class="font-medium">E-mail ID of the Corresponding Author*</label>
                <input type="email" v-model="formData.email" class="my-2 border rounded-md py-1 px-2">
                <p v-if="errors.mailError" class="error">{{ errors.mailError }}</p>
            </div>

            <!-- WhatsApp Number -->
            <div class="flex flex-col my-8">
                <label class="font-medium">WhatsApp Number of the Corresponding Author*</label>
                <input type="tel" v-model="formData.phone" class="my-2 border rounded-md py-1 px-2">
                <p v-if="errors.phoneError" class="error">{{ errors.phoneError }}</p>
            </div>

            <!-- Designation -->
            <div class="flex flex-col my-8">
                <label class="font-medium">Designation*</label>
                <input type="text" v-model="formData.designation" class="my-2 border rounded-md py-1 px-2">
                <p v-if="errors.designationError" class="error">{{ errors.designationError }}</p>
            </div>

            <!-- Institution -->
            <div class="flex flex-col my-8">
                <label class="font-medium">Name of the Institution*</label>
                <input type="text" v-model="formData.institution" class="my-2 border rounded-md py-1 px-2">
                <p v-if="errors.institutionError" class="error">{{ errors.institutionError }}</p>
            </div>

            <!-- Choose File -->
            <div class="flex flex-col my-4">
                <label class="font-medium">Upload Article File*
                    <br>
                    <span class="font-light text-sm">Upload 1 supported document (.docx). Max 5MB.</span>
                </label>
                <input type="file" @change="handleFileUpload" accept=".docx" class="my-2">
                <p v-if="errors.fileError" class="error">{{ errors.fileError }}</p>
            </div>

            <!-- Declaration -->
            <div class="flex flex-col my-8 mt-4">
                <label class="font-medium">Declaration*
                    <br>
                    <div class="flex items-center justify-normal gap-3">
                        <input type="checkbox" id="toggle-pw" name="toggle-pw" class="accent-black w-4 h-4"
                            v-model="termsAccepted">
                        <span class="font-light text-sm">I hereby declare that I submit my article as per guidelines of
                            article submission.</span>
                    </div>
                </label>
            </div>

            <button :disabled="!termsAccepted || hasErrors || !this.file" type="submit">
                <span
                    :class="!termsAccepted || hasErrors || !this.file ? 'disabled bg-[#999]' : 'bg-[#1A73E8] hover:bg-[#0A43FF]'"
                    class="font-extrabold text-white px-7 py-2 rounded-full">Submit</span>
            </button>
        </form>
    </div>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu.vue";


export default {
    components: { DropdownMenu },
    data() {
        return {
            formData: {
                title: "",
                authorName: "",
                email: "",
                phone: "",
                designation: "",
                institution: "",
            },
            errors: {
                titleError: "",
                nameError: "",
                mailError: "",
                phoneError: "",
                designationError: "",
                institutionError: "",
                fileError: "",
            },
            file: null,
            uploadDisabled: true,
            termsAccepted: false,
        };
    },
    computed: {
        hasErrors() {
            return Object.values(this.errors).some((error) => error !== "");
        },
        fieldsEmpty() {
            return Object.values(this.formData).some((value) => value !== "");
        }
    },
    methods: {
        validateField() {
            this.errors.titleError = this.formData.title ? "" : "Title is required.";
            this.errors.nameError = this.formData.authorName ? "" : "Author name is required.";
            this.errors.mailError = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.formData.email)
                ? ""
                : "Enter a valid email.";
            this.errors.phoneError = /^[0-9]{10}$/.test(this.formData.phone)
                ? ""
                : "Enter a valid 10-digit phone number.";
            this.errors.designationError = this.formData.designation ? "" : "Designation is required.";
            this.errors.institutionError = this.formData.institution ? "" : "Institution name is required.";
        },
        validateAndSubmit() {
            this.validateField();
            if (!this.hasErrors && this.termsAccepted) {
                alert("Form submitted successfully!");
            }
        },
        handleFileUpload(event) {
            this.file = event.target.files[0];
            if (!this.validateFile(this.file)) {
                this.errors.fileError = "Please select a valid DOCX file.";
                this.file = null;
                event.target.value = ""; // Clear input
            } else {
                this.errors.fileError = "";
            }
            this.uploadDisabled = !this.file;
        },
        validateFile(file) {
            const validMimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            const validExtension = ".docx";
            return file && file.type === validMimeType && file.name.endsWith(validExtension);
        },
        async uploadFile() {
            if (!this.file) {
                this.errors.fileError = "Please upload a valid DOCX file.";
                return;
            }

            alert("Work in progress.");
            // const fileRef = firebase_storage.ref().child(`articles/${this.file.name}`);
            // const uploadTask = fileRef.put(this.file);

            // firebase_firestore
            // alert("File uploaded successfully!");
        },
    },
};
</script>

<style scoped>
form {
    box-shadow: 0 7px 15px -3px #ccc, 0px -7px 15px -3px #ccc;
}

.error {
    color: #b00;
    font-size: 0.875rem;
}
</style>
