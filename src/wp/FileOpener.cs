// Copyright (c) Sergey Grebnov.  Licensed under the MIT license. 

using System;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Storage;
using WPCordovaClassLib.Cordova.Commands;

namespace WPCordovaClassLib.Cordova.Commands
{
    public class FileOpener : BaseCommand
    {
        async public void openFile(string options)
        {
            var optStings = JSON.JsonHelper.Deserialize<string[]>(options);

            string filePath = optStings[0].Replace('/', '\\').Substring(2);

            try
            {

                StorageFolder local = Windows.Storage.ApplicationData.Current.LocalFolder;
                StorageFile file = await local.GetFileAsync(filePath);

                if (file == null)
                {
                    this.DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "File not found: " + filePath));
                    return;
                }

                var success = await Windows.System.Launcher.LaunchFileAsync(file);

                if (success)
                {
                    this.DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
                }
                else
                {
                    this.DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Unable to start the app associated with the following file: " + filePath));
                }
            }
            catch (Exception ex) {
                this.DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, ex.Message));
            }
        }
    }
}