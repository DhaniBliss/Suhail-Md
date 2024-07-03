const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349041275877";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_33_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxORUhvcGxtR0ZkaFo0NUF4Tm0xWlNSQnY1eVJSck9tSkp2S1c5T29mbFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhBX082Yl82US1hX2NGYW1LQ2NhTEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQwZTNjODEtM2FjYy00NWViLWExYWUtOGY4NDdiMTMxYTc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE1NSxcbiAgICAgIDEyMSxcbiAgICAgIDUxLFxuICAgICAgMTY5LFxuICAgICAgMTU3LFxuICAgICAgMTI4LFxuICAgICAgNTYsXG4gICAgICAyMjksXG4gICAgICAyMDMsXG4gICAgICAxODYsXG4gICAgICAxNTcsXG4gICAgICAxMSxcbiAgICAgIDUwLFxuICAgICAgMjExLFxuICAgICAgMjA3LFxuICAgICAgMjQzLFxuICAgICAgMTM2LFxuICAgICAgMTE5LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMjA4LFxuICAgICAgMTEyLFxuICAgICAgMTI2LFxuICAgICAgMTA4LFxuICAgICAgMyxcbiAgICAgIDExMCxcbiAgICAgIDMyLFxuICAgICAgMTg5LFxuICAgICAgMzMsXG4gICAgICAyMzYsXG4gICAgICAxODMsXG4gICAgICAyNDIsXG4gICAgICA3OCxcbiAgICAgIDIxNCxcbiAgICAgIDIzMCxcbiAgICAgIDE3NCxcbiAgICAgIDY3LFxuICAgICAgMTgwLFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5LRjFFMlNEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQxMjc1ODc3OjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Ly64LyGRGjDpW7DriDDn2zDrnNz4Ly64LyGXCIsXG4gICAgXCJsaWRcIjogXCIyMzEwNjUxMTMzMzc4NzQ6NjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFQ4bjUwR0VObXlsclFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJZU90OTF5V3MxMGg3ZUFGc1FtUzVmSkRYQkpJWmNHUDhPemJOSlhHekZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInN3UExyWlVsTVBUTWl6eFRiZ1I4SUlkalZVdmRLdVF3NzZZc1diQmZEbFdXQ3lUNG5HNXAyL3FGbG1TU3dkVTM2OHlPVjVvamV4d2N6K1E4Tk5JdkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVrK1lYS2VWTXlMU3VyRGxnOVZ6Vlo5bWhFZ2Vwbi85am1VSFdBdnlYbno0c3BFakZqMm1Obi9vODhHN28rdHd0MW05NnRmOEo0T1RLVDhONEtWVUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDEyNzU4Nzc6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDMxNTgyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Bliss✅💚",
  botname : process.env.BOT_NAME  || "Dhani Bliss🧊⛏️",
  ownername:process.env.OWNER_NAME|| "Dhani Bliss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
