using System;
using System.Web.Optimization;

namespace DurandalTemplate {
  public class RambaseBundleConfig {
    public static void RegisterBundles(BundleCollection bundles) {
      bundles.IgnoreList.Clear();
      AddDefaultIgnorePatterns(bundles.IgnoreList);

      bundles.Add(
        new ScriptBundle("~/scripts/rambase")
          .Include("~/Scripts/jquery-migrate-{version}.min.js")
          .Include("~/Scripts/kendo/2012.3.1114/kendo.web.min.js")
          .Include("~/Scripts/knockout-kendo.min.js")
        );

      bundles.Add(
        new StyleBundle("~/Content/css/rambase")
          .Include("~/Content/kendo/2012.3.1114/kendo.common.min.css")
          .Include("~/Content/kendo/2012.3.1114/kendo.default.min.css")
        );
    }

    public static void AddDefaultIgnorePatterns(IgnoreList ignoreList) {
      if(ignoreList == null) {
        throw new ArgumentNullException("ignoreList");
      }
    }
  }
}


