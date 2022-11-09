export class TextHelper{

    public static transfromUpper(text:string):string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    public static removeSpeicalCharector(text:string):string {
        return text.replace(/[^A-Z0-9]/ig, "_");
    }

}