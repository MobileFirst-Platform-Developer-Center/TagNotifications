/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function sendBroadcastNotification(notificationText) {
    var notificationOptions = {};
    notificationOptions.message = {};

    notificationOptions.message.alert = notificationText;

    // If attempting to use one of the native samples from the project folder,
    // Replace "HybridTagNotifications" with the required application id. Refer to Tag Notification tutorial for more information.
    WL.Server.sendMessage("HybridTagNotifications", notificationOptions);

    return {
        result : "Notification sent to all users."
    };
}

function sendTagNotification(notificationText, notificationTags) {
    var notificationOptions = {};
    notificationOptions.message = {};
    notificationOptions.target = {};

    var tags = notificationTags.split(",");

    notificationOptions.message.alert = notificationText;
    notificationOptions.target.tagNames = tags;

    WL.Server.sendMessage("HybridTagNotifications", notificationOptions);

    return {
        result : "Notification sent to users subscribed to the tag(s): '" + notificationTags + "'."
    };
}
