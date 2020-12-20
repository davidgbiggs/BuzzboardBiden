#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <Firebase.h>
//#import <FBAudienceNetwork/FBAdSettings.h>
//#import <FacebookAdapter/FacebookAdapter.h>
//@import GoogleMobileAdsMediationTestSuite;

#if DEBUG
//@import GoogleMobileAdsMediationTestSuite;
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
// if ([FIRApp defaultApp] == nil) {
//  [FBAdSettings setAdvertiserTrackingEnabled:YES];
  [FIRApp configure];
// }
#if DEBUG
  InitializeFlipper(application);
#endif

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"BuzzboardBiden"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
//  #if DEBUG
//  [GoogleMobileAdsMediationTestSuite presentOnViewController:self.window.rootViewController delegate:nil];
//      [[GADMobileAds sharedInstance] startWithCompletionHandler:^(GADInitializationStatus *_Nonnull status) {
//
//          NSLog(@"Ad setup completed");
//
//          NSLog(@"AdMob SDK version: %@", [GADRequest sdkVersion]);
//
//          NSDictionary<NSString *, GADAdapterStatus *>* states = [status adapterStatusesByClassName];
//          for(id key in states) {
//              GADAdapterStatus * adapterStatus = [states objectForKey:key];
//              NSString* state = @"not ready";
//              if (adapterStatus.state == GADAdapterInitializationStateReady) state = @"ready";
//              double latency = adapterStatus.latency;
//
//              NSLog(@"%@ : %@ : %f sec", key, state, latency);
//          }
//      }];
//  #endif
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
