﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS33
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Investment.
    /// </summary>
    // *** Start programmer edit section *** (Investment CustomAttributes)

    // *** End programmer edit section *** (Investment CustomAttributes)
    [PublishName("Инвестиции")]
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("InvestmentE", new string[] {
            "Name as \'Name\'"})]
    [View("InvestmentL", new string[] {
            "Name as \'Name\'"})]
    public class Investment : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        // *** Start programmer edit section *** (Investment CustomMembers)

        // *** End programmer edit section *** (Investment CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Investment.Name CustomAttributes)

        // *** End programmer edit section *** (Investment.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Investment.Name Get start)

                // *** End programmer edit section *** (Investment.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Investment.Name Get end)

                // *** End programmer edit section *** (Investment.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Investment.Name Set start)

                // *** End programmer edit section *** (Investment.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Investment.Name Set end)

                // *** End programmer edit section *** (Investment.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "InvestmentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View InvestmentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("InvestmentE", typeof(IIS.ISS33.Investment));
                }
            }
            
            /// <summary>
            /// "InvestmentL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View InvestmentL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("InvestmentL", typeof(IIS.ISS33.Investment));
                }
            }
        }
    }
}
