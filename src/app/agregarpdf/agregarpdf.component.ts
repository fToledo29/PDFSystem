import { Component, Inject} from '@angular/core';
import { FirebaseApp, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

let fireBaseObj: any;
let userData: any;

@Component({
    //selector: 'agregarpdf-component',
    templateUrl : './agregarpdf.component.html',
    styleUrls: ['./agregarpdf.component.css']
})



export class AgregarPDFComponent {

public selectedFileName: any;
public isLoggedIn: boolean;
public usersCollection;




    constructor(@Inject(FirebaseApp) public firebaseApp: any, public af: AngularFire){
        fireBaseObj = firebaseApp
        af.auth.login({
            provider: AuthProviders.Google, 
            method: AuthMethods.Popup
        });
        this.af.auth.subscribe(auth => {
            if(auth != null) {
                userData = auth;
                this.isLoggedIn = true;
            }
        });

    }

      
    onFileChange(ev){
        //http://plnkr.co/edit/fd6QWBxHLlQRlY7vv3Fl?p=preview
        this.selectedFileName = ev.target.files[0];
        console.log("This is the file name: " + this.selectedFileName.name);
    }
    
    public uploadFile(isPDF: boolean)
    {
        let folderName: string = "";
        if(isPDF)
            folderName = "PDFs";
        else
            folderName = "Thumbs";
        let storageRef: any;
        var fileName =  this.selectedFileName.name;
        storageRef = fireBaseObj.storage().ref('/'+ folderName + '/' + fileName);
        let storage = fireBaseObj.storage();
        var uploadTask =  storageRef.put(this.selectedFileName);
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        //uploadTask.on(this.firebaseApp.storage.TaskEvent.state_changed, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case "paused": // or 'paused'
                console.log('Upload is paused');
                break;
            case "running": // or 'running'
                console.log('Upload is running');
                break;
            }
        }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
                console.log("There was an error" + error.code);            
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                console.log("Canceled by user");
                // User canceled the upload
                break;
            case 'storage/unknown':
                console.log("Error unknown");
                // Unknown error occurred, inspect error.serverResponse
                break;
        }
    }, function() {
        var downloadURL = uploadTask.snapshot.downloadURL;
            console.log(downloadURL);
             var postData = {
                author: userData.auth.displayName,
                uid: userData.uid,
                url: downloadURL,
                starCount: 0,
            };

            // Here is going to change based on the business
            var newPostKey = fireBaseObj.database().ref().child(folderName).push().key;
            var updates = {};
            updates['/'+ folderName + '/' + newPostKey] = postData;
            updates['/Client-'+ folderName + '/' + userData.uid + '/' + newPostKey] = postData;
            fireBaseObj.database().ref().update(updates);
        });
    }

    
    
}

